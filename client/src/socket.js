import io from 'socket.io-client';
import {connect, disconnect, addChat} from "./actions";

let socket;
export let username;
export function createSocket(username) {
    socket = io(`${window.location.protocol}//${window.location.hostname}:3001?username=${username}`);
    socket.on('connect', () => {
       console.log("Connected!");
       connect();
    });
    socket.on('disconnect', () => {
        console.log("Disconnected!");
        disconnect();
    });
    socket.on('chat msg', addChat);
}

export function sendMsg(msg) {
    socket.emit('chat msg', msg);
}

export function setUsername() {
    while(!username) {
        username = prompt('Username:');
        username = username.trim();
    }
}
setUsername();
createSocket(username);
