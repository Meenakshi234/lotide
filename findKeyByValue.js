const assertEqual = require('./assertEqual');
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
  const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  module.exports = findKeyByValue;