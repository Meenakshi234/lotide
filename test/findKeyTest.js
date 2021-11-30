const assert = require('chai').assert;
const findKey = require ('../findKey');

const inputObject = {
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }; 
describe("#findKey",()=>{
    it("it returns noma",()=>{
        assert.strictEqual(findKey(inputObject,x => x.stars === 2),"noma");
    });
});
