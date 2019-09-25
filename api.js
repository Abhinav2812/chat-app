const request = require('superagent');

const reply = (msg) => {
    const responses = {
        "hi": "Hello there!",
        "how are you doing?": "Never felt better"
    };
    const msg_lower = msg.toLowerCase(msg);
    if(responses.hasOwnProperty(msg_lower)) {
        return responses[msg_lower];
    }
    return "I don't understand what you mean";
};
const api = (msg) => {
    return request
        .post('localhost:5000/')
        .send({ q: msg })
        .then(res => JSON.parse(res.text).res)
        .catch(() => reply(msg));
};

module.exports = api;
