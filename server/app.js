const express = require('express')
const app = express();
const server = require('http').Server(app);
var io = require('socket.io')(server);

// io.on('connection', function(socket){
//   console.log('a user connected');
//   socket.emit('welcom')
// });

// app.get('/', function(req, res){
//   res.sendFile('client' + '/index.html');
//   });
io.on('connection', function(socket){
  socket.on('message', function(msg){
    socket.emit('message',msg.messagetext)
    socket.broadcast.emit('message', msg.messagetext);
    // console.log('message: ' + msg);
  });
  socket.on('nextslide', function(){
    socket.emit('nextslide')
    socket.broadcast.emit('nextslide')
  })
  socket.on('prevSlide',function(){
    socket.emit('prevSlide')
    socket.broadcast.emit('prevSlide')
  })
});    

server.listen(3000, function(){
  console.log('listening on *:3000');
});