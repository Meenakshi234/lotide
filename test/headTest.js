
const  assert = require('chai').assert;
const head = require('../head');

/* const assertEqual = require('../assertEqual');
console.log(head([2,3,4])); 
console.log(head([]));
console.log(head([8]));
console.log(head(['Meenakshi']));
console.log(head(['apple','banana','pear']));
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(['apple','banana','pear']), "banana"); */

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
