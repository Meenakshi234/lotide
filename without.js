const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

function without(source,itemsToRemove){
 return source.filter(x => !itemsToRemove.includes(x));

}

module.exports = without;