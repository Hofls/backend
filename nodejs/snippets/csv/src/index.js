const fs = require('fs');
const csv = require('csv-parser');


fileToCsv((results) => {
    console.log(results);
})

function fileToCsv(callback) {
    const results = [];
    fs.createReadStream('periods.csv')
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
            console.log('done');
            callback(results);
        });
}

