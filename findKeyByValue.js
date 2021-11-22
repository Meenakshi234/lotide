const assertEqual = function(actual,expected) {
    let str1 = actual;
    let str2 = expected;
    let result = (str1 === str2);
    if (result) {
      console.log('✅✅✅' + "Assertion Passed:[%s] === [%s]",str1,str2);
    } else {
      console.log('🛑🛑🛑' + "Assertion Failed:[%s] !== [%s]",str1,str2);
    }
  };
  const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  function findKeyByValue(objSearch,valueSearch){
      let keyArray= Object.keys(objSearch);
      let returnString ;  
      for(var item of keyArray)
      {
          if(objSearch[item] == valueSearch)
          {
              return item;
          }
      }
  }
 
  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);