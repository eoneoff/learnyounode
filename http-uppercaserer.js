const http = require('http');
const map = require('through2-map');
http.createServer((req, resp) => {
    if(req.method == 'POST'){
        req.pipe(map((data) => data.toString().toUpperCase())).pipe(resp);
    }
}).listen(process.argv[2] || 8000);