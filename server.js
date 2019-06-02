const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

io.on('connection', socket => {
  console.log('user connected');
  socket.on('chat message', msg => {
    io.emit('chat message', msg);
  });
});

http.listen(8000, () => {
  console.log(`listening on *:8000`);
});
