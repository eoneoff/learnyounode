const fs = require('fs');
let re = new RegExp(`.+${process.argv[3]}$`, 'g');
fs.readdir(process.argv[2], 'utf-8', (err, data) => {
    data.filter(f => f.match(re)).forEach(fn => console.log(fn));
});