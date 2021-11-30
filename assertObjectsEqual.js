const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const assertArraysEqual = require('./assertArraysEqual');

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
    const inspect = require('util').inspect; // <= add this line
    let result = eqObjects(actual,expected);
    if(result){
        console.log('✅✅✅' + "Assertion Passed:"+ `${inspect(actual)}` + "=== " +`${inspect(expected)}`);
    } else {
        console.log('🛑🛑🛑' + "Assertion Failed:"+`${inspect(actual)}` + " !== "  +`${inspect(expected)}`);
      }
  };

  //test
/* const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(ab,ba);
assertObjectsEqual(ab,abc);
assertObjectsEqual(cd, dc);
assertObjectsEqual(cd,cd2); */

module.exports = assertObjectsEqual;