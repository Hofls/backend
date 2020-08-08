const calls = require("./method-calls.js");

exceptionMethod = () => {
    throw "Problems with calculations"
};

calls.retryException(exceptionMethod, 3, 500);

