const utils = require("./utils");

module.exports = {

    createEnemies: function(arrowNames) {
        let enemies = [];
        for (let arrowName of arrowNames) {
            enemies.push(this.findArrowByName(arrowName).enemyType);
        }
        return enemies;
    },

    isEnemyDead: function(enemyType, userAction) {
        let expectedArrow = this.findArrowByEnemy(enemyType).arrow;
        return userAction.includes(expectedArrow);
    },

    pickEnemy: function(enemies) {
        let type = utils.pickRandom(enemies);
        let name = utils.pickRandom(this.getEnemyNames());
        return `${type} ${name}`;
    },

    pickNewArrow: function(oldArrows) {
        let newArrows = utils.removeEach(this.getArrowsNames(), oldArrows);
        if (newArrows && newArrows.length > 0) {
            return this.findArrowByName(utils.pickRandom(newArrows));
        } else {
            return null;
        }
    },

    findArrowByEnemy(enemyType) {
        for (let arrow of this.getArrows()) {
            if (arrow.enemyType === enemyType) {
                return arrow;
            }
        }
        return null;
    },

    findArrowByName(userAction) {
        for (let arrow of this.getArrows()) {
            if (userAction.includes(arrow.arrow)) {
                return arrow;
            }
        }
        return null;
    },

    getArrowsNames: function () {
        let arrowNames = [];
        for (let arrow of this.getArrows()) {
            arrowNames.push(arrow.arrow);
        }
        return arrowNames;
    },

    getEnemyTypes: function () {
        let arrowNames = [];
        for (let arrow of this.getArrows()) {
            arrowNames.push(arrow.enemyType);
        }
        return arrowNames;
    },

    getArrows: function () {
        let arrows = [];
        arrows.push({arrow: 'огня', enemyType: 'ледяной'});
        arrows.push({arrow: 'льда', enemyType: 'огненный'});
        arrows.push({arrow: 'тьмы', enemyType: 'светлый'});
        arrows.push({arrow: 'света', enemyType: 'темный'});
        arrows.push({arrow: 'грома', enemyType: 'прислушивающийся'});
        arrows.push({arrow: 'порядка', enemyType: 'хаотичный'});
        arrows.push({arrow: 'пробивания', enemyType: 'бронированный'});
        arrows.push({arrow: 'страха', enemyType: 'смелый'});
        arrows.push({arrow: 'земли', enemyType: 'летающий'});
        arrows.push({arrow: 'яда', enemyType: 'кровавый'});
        arrows.push({arrow: 'ослепления', enemyType: 'одноглазый'});
        arrows.push({arrow: 'камня', enemyType: 'стекляный'});
        arrows.push({arrow: 'ярости', enemyType: 'спокойный'});
        arrows.push({arrow: 'экзорцизма', enemyType: 'призрачный'});
        arrows.push({arrow: 'ястреба', enemyType: 'мышиный'});
        arrows.push({arrow: 'иллюзий', enemyType: 'глупый'});
        arrows.push({arrow: 'гравитации', enemyType: 'тяжелый'});
        arrows.push({arrow: 'золота', enemyType: 'алчный'});
        arrows.push({arrow: 'безумия', enemyType: 'умный'});

        return arrows;
    },

    getRandomEnemyName: function () {
        return utils.pickRandom(this.getEnemyNames());
    },

    getEnemyNames: function () {
        return ['гоблин', 'элементаль', 'скелет', 'орк', 'колдун', 'маг', 'вампир', 'разбойник',
            'гигант', 'зверь', 'гуманоид', 'злодей', 'голем', 'демон', 'оборотень', 'варвар', 'минотавр',
            'охотник', 'гуль', 'берсерк', 'зомби', 'тролль', 'прислужник', 'паук'];
    },



}