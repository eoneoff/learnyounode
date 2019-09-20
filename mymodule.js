const fs = require('fs');

module.exports = (dirname, ext, callback) => {
    fs.readdir(dirname, 'utf-8', (err, data) => {
        if(err) return callback(err);
        callback(null, data.filter(fn => fn.match(new RegExp(`.+${ext}$`, "g"))));
    });
};