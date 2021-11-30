
const  assert = require('chai').assert;
const head = require('../head');

describe("#head",()=>{
    it("require 1 for [1,2,3]",()=>{
        assert.strictEqual(head([1,2,3]),1);
    });
    it("returns '5' for ['5']", () => {
        assert.strictEqual(head(['5']), '5'); 
    });
    it("returns '5' for[5,6,7] ",() => {
        assert.strictEqual(head([5,6,7]),5);
    });
    it("returns 'Hello for ['Hello', 'Lighthouse', 'labs'] ",() => {
        assert.strictEqual(head(['Hello', 'Lighthouse', 'labs']),'Hello');
    });
    it("returns 'apple' for ['apple','banana','pear'] ",() => {
        assert.strictEqual(head(['apple','banana','pear']),'apple');
    });
});
