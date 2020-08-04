const messenger = require("./messenger");

setInterval(function() {
    var date = new Date();
    console.log(messenger.getMessage());
}, 5000);
