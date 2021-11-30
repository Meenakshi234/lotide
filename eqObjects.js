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


/* const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, ba),true);
assertEqual(eqObjects(ab, abc),true);
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, dc),true);
assertEqual(eqObjects(cd,cd2),true); */

module.exports = eqObjects;