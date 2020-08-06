// Tokens list - https://momentjs.com/docs/#/parsing/string-format/
// npm install moment --save

const moment = require('moment');

function stringToDate() {
    let dateObject = moment("23.10.2015", "DD.MM.YYYY").toDate();
}

function dateToString() {
    let dateString = moment(new Date()).format('DD-MM-YYYY');
}