const PORT = 3001;

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io').listen(server);

app.use(express.static(__dirname));
app.get('/api/', (req, res) => {
   res.send('<h1>Hello world!</h1>');
});
server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});

io.on('connection', function(socket){
    socket.on('chat msg', (msg) => {
        console.log(socket.id, msg);
    });

    console.log('a user connected');
});
