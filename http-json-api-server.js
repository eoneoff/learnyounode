"use strict";
const http = require('http');
const url = require('url');

http.createServer((req, resp) => {
    if(req.method == "GET"){
        resp.writeHead(200, {'Content-Type': 'application/json'});
        let addr = url.parse(req.url, true);
        let date = new Date(addr.query.iso);
        let response = 'invalis address';
        switch(addr.pathname){
            case '/api/parsetime':
                response = JSON.stringify({
                    hour: date.getHours(),
                    minute: date.getMinutes(),
                    second: date.getSeconds()
                });
                break;
            case '/api/unixtime':
                response = JSON.stringify({
                    unixtime: date.getTime()
                });
                break;
        }
        resp.end(response);
    }
}).listen(process.argv[2] || 8000);