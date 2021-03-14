const schedule = require("node-schedule");
// package.json -> "node-schedule": "^1.3.2"

// At 11:55 on every workday
schedule.scheduleJob("55 11 * * 1-5", function() {
    console.log("It's time to run!");
    runCrawler();
});
