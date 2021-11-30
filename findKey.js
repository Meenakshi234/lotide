const assertEqual = require('./assertEqual');
const findKeyByValue = require('./findKeyByValue');

const findKey = function(objectInput,callback){
  let objValues =Object.values(objectInput)
  for(let item of objValues){
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
 
  /* assertEqual(result ,"noma");
  assertEqual(result,"Ora"); */
  module.exports = findKey;