const utils = require("./utils");

module.exports = {

    isEnemyDead: function(enemyType, actualArrow) {
        let expectedArrow = this.findArrowByEnemy(enemyType).arrow;
        return actualArrow.includes(expectedArrow);
    },

    pickEnemy: function(enemies) {
        let type = utils.pickRandom(enemies);
        let name = utils.pickRandom(this.getEnemyNames());
        return `${type} ${name}`;
    },

    findArrowByEnemy(enemyType) {
        for (let arrow of this.getArrows()) {
            if (arrow.enemyType === enemyType) {
                return arrow;
            }
        }
        return null;
    },

    getArrows: function () {
        let arrows = [];
        arrows.push({arrow: 'огня', enemyType: 'ледяной'});
        arrows.push({arrow: 'льда', enemyType: 'огненный'});
        arrows.push({arrow: 'тьмы', enemyType: 'светлый'});
        arrows.push({arrow: 'света', enemyType: 'темный'});
        return arrows;
    },

    getEnemyNames: function () {
        return ['гоблин', 'элементаль', 'скелет', 'орк'];
    },



}