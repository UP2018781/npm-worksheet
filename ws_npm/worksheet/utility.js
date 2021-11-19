const underscore = require('underscore');
function range(arr1){
    const result = parseInt(underscore.max(arr1)) - parseInt(underscore.min(arr1));
    return result;
}
module.exports.range = range;