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

    /** Calls promise. If it returns exception - calls again */
    retryPromise: async function (method, tries, cooldownMs) {
        if (tries <= 0) {
            return ;
        }
        let errorHandler = async (error) => {
            console.log("Retrying. Method threw exception - " + error);
            await this.sleep(cooldownMs);
            this.retryPromise(method, tries -1, cooldownMs);
        };
        return method().catch(errorHandler);
    },

    sleep: function (ms) {
        return new Promise((resolve) => {
            setTimeout(resolve, ms);
        })
    }

};
