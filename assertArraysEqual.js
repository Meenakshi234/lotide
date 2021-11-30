const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1,array2)
{
    let result = eqArrays(array1,array2);
    if (result) {
        return '✅✅✅ Assertion Passed: ['+ array1 +'] [' + array2 +']';
      } else {
        return '🛑🛑🛑 Assertion Failed: ['+ array1 + '] ['+ array2 +']' ;
      }
    
};
module.exports = assertArraysEqual;
