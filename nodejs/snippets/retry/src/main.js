const calls = require("./method-calls.js");

exceptionMethod = () => {
    throw "Standard exception"
};
calls.retryException(exceptionMethod, 3, 500);

promiseMethod = async () => {
    throw "Promise exception"
};
calls.retryPromise(promiseMethod, 3, 500);
