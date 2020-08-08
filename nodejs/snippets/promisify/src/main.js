const util = require('util');
const fs = require('fs');

// Callback based method:
fs.readFile('./package.json',  'utf-8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});

// Promise based method:
const readFile = util.promisify(fs.readFile);
readFile('./package.json', 'utf-8')
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });
