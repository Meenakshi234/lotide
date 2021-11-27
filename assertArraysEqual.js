const eqArrays =require('./eqArrays');

/* const assertEqual = function(actual,expected) {
    let str1 = actual;
    let str2 = expected;
    let result = (str1 === str2);
    if (result) {
      console.log('✅✅✅' + "Assertion Passed:[%s] === [%s]",str1,str2);
    } else {
      console.log('🛑🛑🛑' + "Assertion Failed:[%s] !== [%s]",str1,str2);
    }
  }; */
const assertArraysEquals = function(array1,array2)
{
    let result = eqArrays(array1,array2);
    if (result) {
        console.log('✅✅✅' + "Assertion Passed:",array1,array2);
      } else {
        console.log('🛑🛑🛑' + "Assertion Failed:",array1,array2);
      }
    
};
module.exports = assertArraysEquals;
