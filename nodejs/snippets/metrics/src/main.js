const metrics = require("./implementation/metrics");

process.on('unhandledRejection', error => {
    throw error;
});

metrics.sendMetricsLoop();
runCrawler()

async function runCrawler() {
    while (true) {
        try {
            await processEntity();
            await metrics.setStatus('ok')
        } catch (exception) {
            console.log('Exception occurred:');
            console.log(exception);
            await metrics.setStatus('fail')
        }
    }
}
