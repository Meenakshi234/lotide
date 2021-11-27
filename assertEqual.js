const assertEqual = function(actual,expected) {
  let str1 = actual;
  let str2 = expected;
  let result = (str1 === str2);
  if (result) {
   return console.log('✅✅✅' + "Assertion Passed:[%s] === [%s]",str1,str2);
  } else {
    return console.log('🛑🛑🛑' + "Assertion Failed:[%s] !== [%s]",str1,str2);
  }
};


//  export the function
module.exports = assertEqual;