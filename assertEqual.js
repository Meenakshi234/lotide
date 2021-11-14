const assertEqual = function(actual,expected) {
  let str1 = actual;
  let str2 = (expected);
  let result = (str1 === str2);
  if (result) {
    console.log('✅✅✅' + "Assertion Passed:[%s] === [%s]",str1,str2);
  } else {
    console.log('🛑🛑🛑' + "Assertion Failed:[%s] !== [%s]",str1,str2);
  }
};
assertEqual("Lighthouse Labs","Bootcamp");
assertEqual(1,1);
assertEqual("Lighthouse Labs","Lighthouse Labs");
assertEqual(1,23);
