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

  const eqArrays =(a,b) =>{
    //1. Check if the two values are identical.
    if(a === b) return true;

    //2. Check if both values are Date objects with the same time, using Date.prototype.getTime().
    if (a instanceof Date && b instanceof Date)
      return a.getTime() === b.getTime();

   //3. Check if both values are non-object values with an equivalent value (strict comparison).
    if (!a || !b || (typeof a !== 'object' && typeof b !== 'object'))
    return a === b;

   //4. Check if only one value is null or undefined or if their prototypes differ.
    if(a.prototype !== b.prototype) return false;

   //5. If none of the above conditions are met, use Object.keys() to check if both values have the same number of keys.
  const keys =Object.keys(a);
  if(keys.length !== Object.keys(b).length) return false;

   //6. Use Array.prototype.every() to check if every key in a exists in b and if they are equivalent by calling eqArrays() recursively.
  return keys.every(k => eqArrays(a[k], b[k]));
};

  // Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1,object2) {
    let obj1keys = Object.keys(object1);
    let obj2Keys = Object.keys(object2);
    //console.log(obj1keys);
    //console.log(obj2Keys);
   
    if(obj1keys.length !== obj2Keys.length)
    {
        return false;
    }
    for (let i of obj1keys )
    {
        //console.log("if value is an array" + Array.isArray(object1[i]));
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


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
//console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
//console.log(eqObjects(ab, abc)); // => false
assertEqual(eqObjects(ab, ba),true);
assertEqual(eqObjects(ab, abc),true);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
//console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
//console.log(eqObjects(cd, cd2)); // => false

assertEqual(eqObjects(cd, dc),true);
assertEqual(eqObjects(cd,cd2),true);