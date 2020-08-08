const messenger = require("./messenger");
var config = require('../config/dev-config.json');



console.log(messenger.getMessage());
console.log(`Current profile is ${process.env.NODE_PROFILE}`);
console.log(`Value from config - ${config.dbName}`);
