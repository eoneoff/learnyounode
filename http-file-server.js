"use strict";
const http = require('http');
const fs = require('fs');
http.createServer((req, resp) => {
    fs.createReadStream(process.argv[3]).pipe(resp);
}).listen(process.argv[2] || 8000);