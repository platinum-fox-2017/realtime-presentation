const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

io.on('connection', function (socket) {
    console.log('a user connected')
    socket.emit('welcome')
    socket.on('slide', (payload) => {
        console.log(payload.number)
        socket.broadcast.emit('slide', payload.number)
    })
});

server.listen(3000, () => {
    console.log('App listening port 3000')
})