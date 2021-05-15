module.exports.handler = async (event, context) => {
    const {version, session, request, state} = event;

    let requestText = request.original_utterance;

    let responseText = '';
    let arrows = [];
    let newGame = !state.user || !state.user.arrows || state.user.arrows.length === 0;

    if (newGame) {
        arrows = ['Огня'];
        responseText = 'Вы взяли стрелу огня и спустились в подземелье.';
    } else {
        arrows = state.user.arrows;
        arrows.push('Льда')
        responseText = 'Вы подняли очередную стрелу';
    }
    if (requestText === 'stop') {
        arrows = [];
        responseText = 'stop';
    }

    return {
        version,
        session,
        user_state_update: {
            arrows: arrows
        },
        response: {
            text: responseText,
            end_session: false,
        },
    };
};