const http = require('http');

http.get(process.argv[2], resp =>{
    let dataString = '';
    resp.setEncoding('utf8');
    resp.on('data', d => dataString  = dataString.concat(d));
    resp.on('error', e => console.error(e));
    resp.on('end', () => {
        console.log(dataString.length);
        console.log(dataString);
    });
}).on('error', (e) => console.error(e));