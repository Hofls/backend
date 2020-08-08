
method = () => {
    throw "Problems with calculations"
};

retry(method, 3, 500);

/** Calls method. If it throws exception - calls again */
async function retry(method, tries, cooldownMs) {
    for (let i = 0; i < tries; i++) {
        if (i > 0) { // First call is instant
            await sleep(cooldownMs);
        }
        try {
            return method();
        } catch (error) {
            console.log("Retrying. Method threw exception - " + error);
        }
    }
}

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
