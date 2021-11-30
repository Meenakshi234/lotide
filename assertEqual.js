const assertEqual = function(actual,expected) {
  let str1 = actual;
  let str2 = expected;
  let result = (str1 === str2);
  if (result) {
   return '✅✅✅ Assertion Passed:[' + str1 + '] === [' + str2 +']';
  } else {
    return '🛑🛑🛑 Assertion Failed:[' + str1 +'] !== [' + str2 +']';
  }
};


//  export the function
module.exports = assertEqual;