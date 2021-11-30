const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe("#assertEqual",() =>{
 it("Lighthouse Labs is not equal to Bootcamp",() =>{
    assert.strictEqual(assertEqual("Lighthouse Labs","Bootcamp"),'🛑🛑🛑 Assertion Failed:[Lighthouse Labs] !== [Bootcamp]');
 });
 it(" 1 is equal to 1",() =>{
    assert.strictEqual(assertEqual(1,1),'✅✅✅ Assertion Passed:[1] === [1]');
 })
 it(" Lighthouse Labs is equal to Lighthouse Labs",() =>{
    assert.strictEqual(assertEqual("Lighthouse Labs","Lighthouse Labs"),'✅✅✅ Assertion Passed:[Lighthouse Labs] === [Lighthouse Labs]');
 })
 it(" 1 is not equal to 23",() =>{
    assert.strictEqual(assertEqual(1,23),'🛑🛑🛑 Assertion Failed:[1] !== [23]');
 })
});