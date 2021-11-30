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

 
 
 module.exports = findKey;