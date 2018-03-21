const express = require('express')
const app = express()
var server = require('http').createServer(app);
const io = require('socket.io')(server)

io.on('connection', function(client){
  console.log('new connection')
  client.on('move-slide',function(data) {
    console.log('move-slide')
    io.emit('move-slide',data)
  })
});

server.listen(3000, function() {
  console.log('Server run on 3000')
})
