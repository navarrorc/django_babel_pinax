const _ = require('lodash');

module.exports = function () {
    _.each([1, 2, 3], n => {
        console.log(n); // => 1, 2, 3
    });
};
