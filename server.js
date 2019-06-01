const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

io.on('connection', function(socket) {
  console.log('a user connected');
  socket.on('chat message', function(msg) {
    console.log('message: ' + JSON.stringify(msg));
    io.emit('chat message', msg);
  });
});

http.listen(8000, function() {
  console.log('listening on *:8000');
});
