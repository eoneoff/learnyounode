const http = require("http");

http.get(process.argv[2], resp =>{
    resp.setEncoding("utf8");
    resp.on('data', data => console.log(data));
});