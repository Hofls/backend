const utils = require("./utils");
const items = require("./items");
module.exports = {

    executeTurn: function (state) {
        if (state.newGame) {
            state.arrows = ['огня'];
            state.enemies = ['ледяной'];
            state.active_enemy = items.pickEnemy(state.enemies);
            state.responseText = `Вы взяли стрелу огня и спустились в подземелье. Впереди ${state.active_enemy}`;
            return state;
        }

        // miss:
        if (!items.isEnemyDead(state.active_enemy_type, state.user_action)) {
            let arrowType = items.findArrowByEnemy(state.active_enemy_type).arrow;
            state.responseText = `Вас победил ${state.active_enemy}. Нужно было использовать стрелу ${arrowType}`;
            state.arrows = [];
            state.enemies = [];
            state.active_enemy = '';
            return state;
        }

        // hit:
        utils.remove(state.enemies, state.active_enemy_type);
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