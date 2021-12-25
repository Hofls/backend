const fs = require("fs");
const {EOL} = require('os');


let mainFolder = "csv_files"

module.exports = {

    createFolder: function(subFolder) {
        let folderPath = `${mainFolder}/${subFolder}`;
        if (!fs.existsSync(folderPath)){
            fs.mkdirSync(folderPath);
        }
    },

    storeCsv: function(source, subFolder) {
        let folderPath = `${mainFolder}/${subFolder}`;
        fs.copyFileSync(source, `${folderPath}/${Date.now()}.csv`);
    },

    combineFiles: function(subFolder) {
        let folderPath = `${mainFolder}/${subFolder}`;
        let combinedFile = `${mainFolder}/results/${subFolder}.csv`;
        if (fs.existsSync(combinedFile)){
            fs.rmSync(combinedFile);
        }

        let files = fs.readdirSync(folderPath);
        for (let fileIndex in files) {
            let file = files[fileIndex]
            let text = fs.readFileSync(`${folderPath}/${file}`, 'ucs2').toString();
            if (fileIndex === '0') {
                fs.writeFileSync(combinedFile, `${text}`, 'ucs2');
            } else {
                let textWithoutHeader = text.split(EOL).slice(1).join(EOL)
                fs.appendFileSync(combinedFile, `${textWithoutHeader}`, 'ucs2');
            }
        }
    }

}