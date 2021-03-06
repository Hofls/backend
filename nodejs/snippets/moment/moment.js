const moment = require("moment");
// package.json -> "moment": "^2.29.1"

function getBirthDate() {
    let today = moment();
    let birthDate = moment(today).add(-26, 'days');
    return birthDate.format("DD.MM.YYYY");
}