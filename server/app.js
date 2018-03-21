const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)



io.on('connection',(socket)=>{
  console.log('connected to server','Mr.',socket.id)
  socket.emit('welcome')
  socket.on('message',(payload)=>{
    console.log("payload==",payload)
    socket.emit('message',payload.messageText)
    socket.broadcast.emit('message',payload.messageText);
  })
  socket.on('slideNext',()=>{
    socket.emit('slideNext')
    socket.broadcast.emit('slideNext')
  })
  socket.on('slidePrev',()=>{
    socket.emit('slidePrev')
    socket.broadcast.emit('slidePrev')
  })
})


server.listen(3000,()=>{
  console.log('server running on port 3000')
})