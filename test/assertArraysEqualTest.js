const assertArraysEquals = require('../assertArraysEqual');
assertArraysEquals([1, 2, 3], [1, 2, 3]);
assertArraysEquals([1,2,4,5],[1,3,6,7]);
assertArraysEquals(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEquals(["1", "2", "3"], ["1", "2", 3]);
