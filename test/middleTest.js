const assert = require('chai').assert;
const middle = require ('../middle');
const assertArraysEqual = require('../assertArraysEqual');

describe("#middle",() => {
    it("returns [3,4] as middle value for [1,2,3,4,5,6]",() =>{
        assert.deepEqual(middle([1,2,3,4,5,6]),[3,4]);
    });
    it("returns [] as middle value for []",() =>{
        assert.deepEqual(middle([]),[]);
    });
    it("returns [] as middle value for [1,2]",() =>{
        assert.deepEqual(middle([1,2]),[]);
    });
    it("returns [3] as middle value for [1,2,3,4,5]",() =>{
        assert.deepEqual(middle([1,2,3,4,5]),[ 3]);
    });
    it("returns [3,4] as middle value for [1,2,3,4,5,6]",() =>{
        assert.deepEqual(middle([1,2,3,4,5,6]),[3,4]);
    });
    it("returns [2,3] as middle value for [1,2,3,4]",() =>{
        assert.deepEqual(middle([1,2,3,4]),[2,3]);
    });

});