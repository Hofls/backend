const io = require("./io");
const game = require("./game");

module.exports.handler = async (event, context) => {
    let state = io.requestToState(event);
    state = game.executeTurn(state);
    return io.stateToResponse(state);
};
