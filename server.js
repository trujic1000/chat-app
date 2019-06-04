const express = require('express');
const app = express();
const path = require('path');
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const PORT = process.env.PORT || 8000;

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname + '/build'));
}

io.on('connection', socket => {
  console.log('user connected');
  socket.on('chat message', msg => {
    io.emit('chat message', msg);
  });
});

http.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});
