
module.exports = {

    pickBetween: function(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    },

    pickFromArray: function(array) {
        return array[Math.floor(Math.random() * array.length)];
    },

};
