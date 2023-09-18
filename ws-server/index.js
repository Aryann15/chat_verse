const express = require  ("express");
const app = express();
const http = require ("http")
const server  = http.createServer(app); 

// app.get('/', (req,res) => {
//     res.send('<h1> web socket </h1>')
// });

app.get('/', (req,res) => {
    res.sendFile (__dirname + '/index.html')
})

server.listen(3000, ()=> {
    console.log('listening on port 3000');
})