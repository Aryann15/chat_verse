const express = require('express');
const http = require ("http");
const app = express();
const server = http.createServer(app);
const socket = require ("socket.io")
const io = socket(server);


io.on('connection', (socket) => {
  socket.emit("your id", socket.id);
  socket.on('send message', (msg) => {
    io.emit('message', msg);
  });
});

const PORT = process.env.port || 3000;
server.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});