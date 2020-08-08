module.exports = {

    /** Calls method. If it throws exception - calls again */
    retryException: async function (method, tries, cooldownMs) {
        for (let i = 0; i < tries; i++) {
            if (i > 0) { // First call is instant
                await this.sleep(cooldownMs);
            }
            try {
                return method();
            } catch (error) {
                console.log("Retrying. Method threw exception - " + error);
            }
        }
    },

    sleep: function (ms) {
        return new Promise((resolve) => {
            setTimeout(resolve, ms);
        })
    }

};
