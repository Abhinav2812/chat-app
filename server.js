const PORT = 3001;

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io').listen(server);
const api = require('./api');

app.use(express.static(__dirname));
app.get('/api/', (req, res) => {
   res.send('<h1>Hello world!</h1>');
});
server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});

io.on('connection', function(socket){
    const {username} = socket.handshake.query;
    socket.on('chat msg', (msg) => {
        console.log(username, ":", msg);
        api(msg.text).then((response) => {
            const payload  = {
                username: 'Mr. Robot',
                text: response,
                self: false,
                timestamp: Date.now()
            };
            socket.emit('chat msg', payload);
        });
    });

    console.log(`a user connected, username:${username}`);
    socket.on('disconnect', () => {
        console.log(`${username} disconnected`);
    })
});
