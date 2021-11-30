const assert = require('chai').assert;
const assertObjectsEqual = require('../assertObjectsEqual');
const eqObjects = require('../eqObjects');

describe("asertObjectsEqual",() =>{
    it(" { a: '1', b: '2' } is equal  {  b: '2', a: '1' } ",() =>{
        assert.strictEqual(assertObjectsEqual({ a: '1', b: '2' },{  b: '2', a: '1' }),"✅✅✅ Assertion Passed: { a: '1', b: '2' } === { b: '2', a: '1' }");
    });
    it("{ a: '1', b: '2' } is not equal to { a: '1', b: '2', c: '3' } ",() =>{
        assert.strictEqual(assertObjectsEqual({ a: '1', b: '2' },{ a: '1', b: '2', c: '3' }),"🛑🛑🛑 Assertion Failed:{ a: '1', b: '2' } !== { a: '1', b: '2', c: '3' }");
    });
    it("{ c: '1', d: ['2', 3] } is equal to { d: ['2', 3], c: '1' }",() =>{
        assert.strictEqual(assertObjectsEqual({ c: '1', d: ['2', 3] },{ d: ['2', 3], c: '1' } ),"✅✅✅ Assertion Passed: { c: '1', d: [ '2', 3 ] } === { d: [ '2', 3 ], c: '1' }");
    });
    it("{ c: '1', d: ['2', 3] } is not equal to { c: '1', d: ['2', 3, 4] } ",() =>{
        assert.strictEqual(assertObjectsEqual({ c: '1', d: ['2', 3] },{ c: '1', d: ['2', 3, 4] }),"🛑🛑🛑 Assertion Failed:{ c: '1', d: [ '2', 3 ] } !== { c: '1', d: [ '2', 3, 4 ] }");
    });
});