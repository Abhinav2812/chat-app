from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer, ListTrainer
from flask import Flask, request
import json

chatbot = ChatBot('Ron Obvious')
# Create a new trainer for the chatbot
trainer = ChatterBotCorpusTrainer(chatbot)

# Train based on the english corpus
trainer.train("chatterbot.corpus.english")

# Train based on english greetings corpus
trainer.train("chatterbot.corpus.english.greetings")

# Train based on the english conversations corpus
trainer.train("chatterbot.corpus.english.conversations")

trainer = ListTrainer(chatbot)

with open("data_tolokers.json","r") as infile:
    conversations = json.load(infile)
    for conversation in conversations:
        trainer.train(conversation)

app = Flask(__name__)
print("Server ready!")

@app.route("/", methods = ['POST', 'GET'])
def hello_world():
    query = None
    if request.method == 'POST':
        query = request.get_json()['q']
    else:
        query = request.args.get('q')
    res = str(chatbot.get_response(query))
    print(res)
    return json.dumps({'res': res})

if __name__ == '__main__':
    app.run()