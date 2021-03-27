const messenger = require("./messenger");
var config = require('../config/dev-config.json');

// Kill process on unhandled promise rejection:
process.on('unhandledRejection', error => {
    console.log(error);
    throw error;
});

start();

async function start() {
    console.log(messenger.getMessage());
    console.log(messenger.getAsyncMessage());
    console.log(await messenger.getAsyncMessage());
    console.log(`Current profile is ${process.env.NODE_PROFILE}`);
    console.log(`Value from config - ${config.dbName}`);
}