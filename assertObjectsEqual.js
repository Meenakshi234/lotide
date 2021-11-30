const eqObjects = require('./eqObjects');
const inspect = require('util').inspect;

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
    let result = eqObjects(actual,expected);
    if(result){
        return '✅✅✅ Assertion Passed: ' + `${inspect(actual)}` + ' === ' +`${inspect(expected)}`;
    } else {
        return '🛑🛑🛑 Assertion Failed:' + `${inspect(actual)}` + ' !== '  + `${inspect(expected)}`;
      }
  };

  

module.exports = assertObjectsEqual;