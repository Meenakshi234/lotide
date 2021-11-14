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
function assertArraysEqual(array1,array2)
{
    let result = eqArrays(array1,array2);
    if (result) {
        console.log('✅✅✅' + "Assertion Passed:",array1,array2);
      } else {
        console.log('🛑🛑🛑' + "Assertion Failed:",array1,array2);
      }
    
}

// middel function

function middle(array){
    let outputArray = [];
    if(typeof array !='undefined' && array != null && array.length > 2 ){
        let lengthArray = array.length;
        console.log(lengthArray);
        let middle = Math.floor(array.length / 2);
        if(lengthArray % 2 === 0){
            outputArray.push(array[middle-1]);
            outputArray.push(array[middle]);
            console.log(outputArray);
        }
        else {
            outputArray.push(array[middle]);
            console.log(outputArray);
        }

        
    }
    else{
        console.log("Empty array");
         console.log(outputArray);
    }

    
}

console.log(middle([1,2,3,4,5,6]));
console.log(middle([]));
console.log(middle([1,2]));
console.log(middle([1,2,3,4]));
console.log(middle([1,2,3,4,5,6]));
console.log(middle([1,2,3]));
console.log(middle([1,2,3,4,5]));
// test code