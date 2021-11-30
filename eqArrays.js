const assertEqual = require('./assertEqual');
const eqArrays = (a,b) =>{
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



module.exports = eqArrays ;