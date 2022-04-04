const pageUtils = require("../utils/pageUtils");

let status = 'ok';

module.exports = {

    setStatus: function(newStatus) {
        status = newStatus;
    },

    sendMetricsLoop: async function() {
        while (true) {
            try {
                if (status === 'ok') {
                    await this.sendMetrics({status: status, value: 1});
                } else {
                    console.log("Sending metrics (FAIL)");
                    await this.sendMetrics({status: status, value: 0});
                }
            } catch (e) {
                console.log('Exception occured (metrics):');
                console.log(e);
            }
            await pageUtils.sleep(3 * 60);
        }
    },

    sendMetrics: async function(metrics) {
        var client = await require('riemann').createClient({
            host: '43.111.55.732',
            port: 5555,
            returnPromise: true
        });

        var data = await client.send(client.Event({
            service: 'somecrawler',
            metric:  metrics.value,
            attributes: [{key: "status", value: metrics.status}],
        }), client.tcp);
    }
};
