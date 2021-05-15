module.exports = {

    // pickFromArray - look at random.js

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