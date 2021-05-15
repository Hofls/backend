const utils = require("./utils");
module.exports = {

    executeTurn: function (state) {
        if (state.newGame) {
            state.arrows = ['Огня'];
            state.enemies = ['Ледяной'];
            state.active_enemy = 'Ледяной';
            state.responseText = 'Вы взяли стрелу огня и спустились в подземелье. Впереди ледяной';
            return state;
        }

        // miss:
        if (state.user_action.includes('огня')) {
            state.responseText = 'Вас победил MOB_NAME, нужно было использовать ARROW_NAME';
            state.arrows = [];
            state.enemies = [];
            state.active_enemy = '';
            return state;
        }

        // hit:
        utils.remove(state.enemies, state.active_enemy);
        if (state.final_enemy) {
            state.arrows.push('Льда');
            state.enemies.push('Огненный'); // генерируем список врагов на основе стрел
            state.active_enemy = 'Огненный'; // страж
            state.responseText = 'Найдена новая ARROW_NAME, впереди страж стрелы - MOB_NAME';
        } else {
            state.responseText = 'Враг повержен, впереди - MOB_NAME';
            return state;
        }
    }

}