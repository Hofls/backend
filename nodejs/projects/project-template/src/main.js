const messenger = require("./messenger");

setInterval(function() {
    console.log(messenger.getMessage());
}, 5000);
