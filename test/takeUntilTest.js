const assert = require('chai').assert;
const takeUntil = require ('../takeUntil');
const assertArraysEqual = require('../assertArraysEqual');

 const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
 const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
 describe("#takeUntil",()=>{
    it("result is true based on callback function1",()=>{
      assert.deepEqual(takeUntil(data1, x => x <0 ),[1, 2, 5, 7, 2 ]);
    });
    it("result is true based on callback function2",()=>{
      assert.deepEqual(takeUntil(data2,x => x === ',' ),[ 'I\'ve', 'been', 'to', 'Hollywood' ]);
    });
  });