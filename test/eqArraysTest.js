const assert = require('chai').assert;
const assertEqual = require('../assertEqual');
const eqArrays = require ('../eqArrays');

describe("#eqArray",() =>{
    it("[1, 2, 3] is equal to [1, 2, 3]",() =>{
        assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]),true);
     });
     it("[1,2,4,5] is not equal to [1,3,6,7]",() =>{
        assert.strictEqual(eqArrays([1,2,4,5],[1,3,6,7]),false);
     });
     it("['1', '2', '3'] is not equal to ['1', '2', 3],",() =>{
         assert.strictEqual(eqArrays(['1', '2', '3'],['1', '2', 3]),false);
     });
});