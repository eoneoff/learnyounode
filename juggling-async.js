const http = require('http');

let servers = {};
process.argv.slice(2, 5).forEach(s => servers[s] = '');

function getResult(server){
    return (res) => {
        let allRes = '';
        res.setEncoding('utf8');
        res.on('error', console.error);
        res.on('data', data => allRes = allRes.concat(data));
        res.on('end', () => {
            servers[server] = allRes;
            for (s in servers) if (!servers[s]) return;
            for (s in servers) console.log(servers[s]);
        });
    }
}

http.get(process.argv[2], getResult(process.argv[2]));
http.get(process.argv[3], getResult(process.argv[3]));
http.get(process.argv[4], getResult(process.argv[4]));