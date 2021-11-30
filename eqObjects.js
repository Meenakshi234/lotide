const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1,object2) {
    let obj1keys = Object.keys(object1);
    let obj2Keys = Object.keys(object2);
    if(obj1keys.length !== obj2Keys.length)
    {
        return false;
    }
    for (let i of obj1keys )
    {
      if(Array.isArray(object1[i]) && Array.isArray(object2[i]))
        {
           return eqArrays(object1[i],object2[i]);
        }
        else{
            if(object1[i] === object2[i]){
                continue;
           }    
           else{
             return false;  
           }
        }
       
    }
    return true ;
};

module.exports = eqObjects;