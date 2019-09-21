"use strict";
const net = require('net');
net.createServer((socket) =>{
    let date = new Date();
    socket.end(`${date.getFullYear()}-${(date.getMonth()< 9 ? 0 : '')}${date.getMonth()+1}-${date.getDate() < 10 ? '0':''}${date.getDate()} ${date.getHours() < 10 ? '0':''}${date.getHours()}:${date.getMinutes() < 10 ? '0':''}${date.getMinutes()}\n`);
}).listen(process.argv[2] || 8000);