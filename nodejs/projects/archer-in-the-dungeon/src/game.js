const utils = require("./utils");
const items = require("./items");
module.exports = {

    executeTurn: function (state) {
        // Start/Restart
        if (state.newGame) {
            state.arrows = ['огня'];
            state.enemies = items.createEnemies(state.arrows);
            state.active_enemy = items.pickEnemy(state.enemies);
            state.responseText = `Вы взяли стрелу ${state.arrows[0]} и спустились в подземелье. Впереди ${state.active_enemy}`;
            return state;
        }

        // Arrow doesn't exist
        if (!items.findArrowByName(state.user_action)) {
            state.responseText = `Впереди - ${state.active_enemy}, вы сказали "${state.user_action}". Выберите стрелу, например "Стрела огня"`;
            return state;
        }

        // Miss
        if (!items.isEnemyDead(state.active_enemy_type, state.user_action)) {
            let arrowType = items.findArrowByEnemy(state.active_enemy_type).arrow;
            // New arrow (guardian)
            if (state.arrows.length === state.enemies.length) {
                state.responseText = `Впереди - ${state.active_enemy}, используйте стрелу ${arrowType}`;
                return state;
            }

            // Normal
            state.responseText = `Вас победил ${state.active_enemy}. Нужно было использовать стрелу ${arrowType}`;
            state.arrows = [];
            state.enemies = [];
            state.active_enemy = '';
            return state;
        }

        // Hit
        utils.remove(state.enemies, state.active_enemy_type);
        if (state.final_enemy) { // Last enemy
            let newArrow = items.pickNewArrow(state.arrows);
            if (!newArrow) { // Dungeon completed
                state.responseText = `Отлично сыграно! Подземелье пройдено, все сокровища ваши!`;
                state.arrows = [];
                state.enemies = [];
                state.active_enemy = '';
                return state;
            }

            state.arrows.push(newArrow.arrow);
            state.enemies = (items.createEnemies(state.arrows));
            state.active_enemy = `${newArrow.enemyType} ${items.getRandomEnemyName()}`;
            state.responseText = `Враг повержен, найдена стрела ${newArrow.arrow}. Впереди страж стрелы - ${state.active_enemy}`;
            return state;
        } else { // Normal enemy
            state.active_enemy = items.pickEnemy(state.enemies);
            state.responseText = `Враг повержен, впереди - ${state.active_enemy}`;
            return state;
        }
    }

}