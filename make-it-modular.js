const mm = require("./mymodule.js")

mm(process.argv[2], process.argv[3], (err, files) => {
    if(err) return console.errorr(`There was an ${err}`);
    files.forEach(file => console.log(file));
});