const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const index = require('./routes/index');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

io.on('connection', (socket) => {
  console.log('client is connected');
  socket.on('button_x_pressed', (payload) => {
    socket.broadcast.emit('back_button_x_pressed', payload)
    socket.emit('back_button_x_pressed', payload)
  })
  socket.on('button_y_pressed', (payload) => {
    socket.broadcast.emit('back_button_y_pressed', payload)
    socket.emit('back_button_y_pressed', payload)
  })
})

server.listen(3000, () => {
  console.log('app run on port 3000')
})
