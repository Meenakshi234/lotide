const head = require('./head');
const middle = require('./middle');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const eqArrays = require('./eqArrays');
const takeUntil = require('./takeUntil');
const countOnly = require('./countOnly');
const eqObjects = require('./eqObjects');
const findKeyByValue = require('./findKeyByValue');
const findKey =require('./findKey');
const without = require('./without');
const map = require('./map');

module.exports = {
    head:   head,
    middle: middle,
    assertArraysEqual:  assertArraysEqual,
    assertEqual:    assertEqual,
    assertObjectsEqual: assertObjectsEqual,
    eqArrays:   eqArrays,
    takeUntil:  takeUntil,
    countOnly:  countOnly,
    eqObjects:  eqObjects,
    findKeyByValue: findKeyByValue,
    findKey:    findKey,
    without:    without,
    map:    map


};