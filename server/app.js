const express = require('express')
const app  = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

io.on('connection', (socket) => {
  console.log('client is connected');
  // console.log(socket.id);
  socket.join('chats')
  
  // console.log(socket);
  socket.emit('welcome')
  socket.on('message', (payload) => {
    console.log(payload.text);
    socket.emit('message', {
      text: payload.text,
      id  : socket.id
    })
    socket.broadcast.emit('message', {
      text: payload.text,
      id  : socket.id
    })
  })
  socket.on('slide-next', () => {
    socket.emit('slide-next')
    socket.broadcast.emit('slide-next')
  })
  socket.on('slide-prev', () => {
    socket.emit('slide-prev')
    socket.broadcast.emit('slide-prev')
  })
  socket.on('slide-up', () => {
    socket.emit('slide-up')
    socket.broadcast.emit('slide-up')
  })
  socket.on('slide-down', () => {
    socket.emit('slide-down')
    socket.broadcast.emit('slide-down')
  })
})


server.listen(3000, () => {
  console.log('server running on PORT 3000');
})