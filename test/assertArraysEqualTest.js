const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');

describe("#assertArraysEqual",() => {
    it("[1, 2, 3] is equal to [1, 2, 3]",() => {
        assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]),'✅✅✅ Assertion Passed: [1,2,3] [1,2,3]');
    });
    it("[1,2,4,5] is not equal to [1,3,6,7]",() => {
        assert.strictEqual(assertArraysEqual([1,2,4,5], [1,3,6,7]),'🛑🛑🛑 Assertion Failed: [1,2,4,5] [1,3,6,7]');
    });
    it("['1', '2', '3'] is equal to ['1', '2', '3']",() => {
        assert.strictEqual(assertArraysEqual(['1', '2', '3'], ['1', '2', '3']),"✅✅✅ Assertion Passed: [1,2,3] [1,2,3]");
    });
    it("['1', '2', '3'] is not equal to ['1', '2', 3]",() => {
        assert.strictEqual(assertArraysEqual(['1', '2', '3'], ['1', '2', 3]),'🛑🛑🛑 Assertion Failed: [1,2,3] [1,2,3]');
    });

});