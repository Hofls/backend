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

    getRandomEnemyName: function () {
        return utils.pickRandom(this.getEnemyNames());
    },

    getVictoryMessage: function () {
        let object = utils.pickRandom(this.getVictoryObject());
        let action = utils.pickRandom(this.getVictoryAction());
        return `${object} ${action}`
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
        arrows.push({arrow: 'ужаса', enemyType: 'пугливый'});
        arrows.push({arrow: 'земли', enemyType: 'летающий'});
        arrows.push({arrow: 'яда', enemyType: 'кровавый'});
        arrows.push({arrow: 'ослепления', enemyType: 'одноглазый'});
        arrows.push({arrow: 'камня', enemyType: 'стеклянный'});
        arrows.push({arrow: 'ярости', enemyType: 'спокойный'});
        arrows.push({arrow: 'экзорцизма', enemyType: 'призрачный'});
        arrows.push({arrow: 'ястреба', enemyType: 'мышиный'});
        arrows.push({arrow: 'иллюзий', enemyType: 'глупый'});
        arrows.push({arrow: 'гравитации', enemyType: 'тяжелый'});
        arrows.push({arrow: 'золота', enemyType: 'алчный'})
        arrows.push({arrow: 'болота', enemyType: 'быстрый'});
        arrows.push({arrow: 'железа', enemyType: 'магнитный'});
        arrows.push({arrow: 'времени', enemyType: 'древний'});

        arrows.push({arrow: 'безумия', enemyType: 'умный'});

        return arrows;
    },

    getEnemyNames: function () {
        return ['гоблин', 'элементаль', 'скелет', 'орк', 'колдун', 'маг', 'вампир', 'разбойник', 'громила',
            'гигант', 'зверь', 'гуманоид', 'злодей', 'голем', 'демон', 'оборотень', 'варвар', 'минотавр',
            'охотник', 'гуль', 'берсерк', 'зомби', 'тролль', 'прислужник', 'паук', 'гремлин', 'василиск',
            'тиран'];
    },

    getVictoryObject: function () {
        return ['Враг', 'Противник', 'Оппонент', 'Монстр', 'Соперник', 'Злодей', 'Негодяй'];
    },

    getVictoryAction: function () {
        return ['повержен', 'побежден', 'сбежал', 'без сознания', 'поражён', 'разбит', 'уничтожен', 'исчез', 'сломлен', 'скрылся'];
    }

}