const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

function without(source,itemsToRemove){
 return source.filter(x => !itemsToRemove.includes(x));

}
/* console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));
const words = ["hello", "world", "lighthouse"];
const fliteredNewArray = without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(words,fliteredNewArray); */
module.exports = without;