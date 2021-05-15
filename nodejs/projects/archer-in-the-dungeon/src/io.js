module.exports = {

    requestToState: function (event) {
        const {version, session, request, state} = event;
        let newGame = !state.user || !state.user.arrows || state.user.arrows.length === 0;
        let restart = request.original_utterance === 'Начать заново';
        if (newGame || restart) {
            return {
                newGame: true
            }
        } else {
            return {
                user_action: request.original_utterance,
                arrows: state.user.arrows,
                enemies: state.user.enemies,
                active_enemy: state.user.active_enemy,
                final_enemy: state.user.enemies.length === 1,
                version: version,
                session: session
            }
        }
    },

    stateToResponse: function (state) {
        return {
            version: state.version,
            session: state.session,
            user_state_update: {
                arrows: state.arrows,
                enemies: state.enemies,
                active_enemy: state.active_enemy
            },
            response: {
                text: state.responseText,
                end_session: false,
            },
        };
    }

}