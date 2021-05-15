module.exports = {

    pickRandom: function(array) {
        return array[Math.floor(Math.random() * array.length)];
    },

    getFirstWord: function(text) {
        return text.substr(0, text.indexOf(' '));
    },

    removeEach: function (array, items) {
        for (let item of items) {
            this.remove(array, item);
        }
        return array;
    },

    remove: function (array, item) {
        let index = array.indexOf(item);
        if (index !== -1) {
            array.splice(index, 1);
        }
    }

}