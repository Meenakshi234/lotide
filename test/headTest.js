const head = require('../head');
const assertEqual = require('../assertEqual');

console.log(head([2,3,4])); 
console.log(head([]));
console.log(head([8]));
console.log(head(['Meenakshi']));
console.log(head(['apple','banana','pear']));

 assertEqual(head([5,6,7]), 5);
 assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
 assertEqual(head(['apple','banana','pear']), "banana");