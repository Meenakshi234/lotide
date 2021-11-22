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

  const findKey = function(objectInput,callback){
     let objValues =Object.values(objectInput)
    // console.log(objValues);
    for(let item of objValues){
        //console.log(item);
        if(callback(item)){
         return findKeyByValue(objectInput,item);
        }
        
    }
    return "item Not Found";
    
  }

 const result = findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 2); // => "noma"
 
   
  console.log(result);
  assertEqual(result ,"noma");
  assertEqual(result,"Ora");