const assertEqual = require('../assertEqual');
const eqArrays = require ('../eqArrays');
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1,2,4,5],[1,3,6,7]),true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]),true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),true);
