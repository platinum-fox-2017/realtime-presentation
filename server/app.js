const express = require('express');
const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

io.on('connection', (socket) => {
  console.log('a user connected');

  // socket.on('chat', (msg) => {
  //   console.log('message: ' + msg)
  //   socket.emit('reply', msg)
  //   socket.broadcast.emit('reply', msg);
  // })

  socket.on('color', (msg) => {
    console.log('message: ' + msg)
    socket.emit('color', msg)
    socket.broadcast.emit('color', msg);
  })
});

server.listen(3000, () => console.log('listening on *:3000'));