const assertEqual = function(actual,expected) {
    let str1 = actual;
    let str2 = (expected);
    let result = (str1 === str2);
    if (result) {
      console.log('✅✅✅' + "Assertion Passed:[%s] === [%s]",str1,str2);
    } else {
      console.log('🛑🛑🛑' + "Assertion Failed:[%s] !== [%s]",str1,str2);
    }
  };
  /* function head(array){
      return ((array && array.length) ?array[0] :'undefined');
  } */

  function head(array){
      return(((array !== null) && (array.length >0))? array[0]:'undefined');
  }
 console.log(head([2,3,4])); 
 console.log(head([]));
 console.log(head([8]));
 console.log(head(['Meenakshi']));
 console.log(head(['apple','banana','pear']));
 assertEqual(head([5,6,7]), 5);
 assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
 assertEqual(head(['apple','banana','pear']), "banana");