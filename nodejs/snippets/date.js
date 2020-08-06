// Tokens list - https://momentjs.com/docs/#/parsing/string-format/
// npm install moment --save

const moment = require('moment');

function stringToDate() {
    let dateObject = moment("23.10.2015", "DD.MM.YYYY").toDate();
}

function dateToString() {
    let dateString = moment(new Date()).format('DD-MM-YYYY');
}

function daysDifference() {
    let momentA = moment("01.10.2015", "DD.MM.YYYY");
    let momentB = moment("12.11.2015", "DD.MM.YYYY");
    let duration = moment.duration(momentB.diff(momentA)).asDays();
}
