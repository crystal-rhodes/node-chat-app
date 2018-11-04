const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage, generateLocationMessage} = require('./utils/message');
let app = express();
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '/../public/');
let server = http.createServer(app);
let io = socketIO(server);

console.log(__dirname + '/../public/');

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newMessage', generateMessage('Admin', 'Welcome to the Chat App'));

    socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'));

    socket.on('createMessage', (message, callback) => {
        console.log('createMessage', message);
        io.emit('newMessage', generateMessage(message.from, message.text));
        callback();
    });

    socket.on('createLocationMessage', (coords) => {
        io.emit('newLocationMessage', generateLocationMessage('Admin', coords.latitude, coords.longitude));
    });

    socket.on('disconnect', (socket) => {
        console.log('User was disconnected');
    });
});


console.log(publicPath);

app.use(express.static(publicPath));

server.listen(port, () => {
    console.log(`server is up on port ${port}`);
})