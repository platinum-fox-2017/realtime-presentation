const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const PORT = process.env.PORT || 3000

io.on('connection', (socket) => {
  socket.emit('welcome', 'heloooooo!')
  socket.on('direction', (dir) => {
    socket.broadcast.emit('changedir', dir)
  })
})

server.listen(PORT, () => {
  console.log('server is running on port ' + PORT)
})