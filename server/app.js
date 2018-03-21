var app = require('express')();
const http =require('http').Server(app)
const io = require('socket.io')(http)

app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});

io.on('connection',function(socket){
  console.log('conneted');
  socket.emit('testingconnected');
  socket.emit('message',function(msg){
    console.log('msg');
  });

  socket.on('slideRight', () => {
      socket.emit('slideRight')
      socket.broadcast.emit('slideRight')
  })
  socket.on('slideLeft', () => {
      socket.emit('slideLeft')
      socket.broadcast.emit('slideLeft')
  })
})
http.listen(3000, function(){
  console.log('listening on *:3000');
});
