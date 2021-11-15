const assertEqual = function(actual,expected) {
    let str1 = actual;
    let str2 = expected;
    let result = (str1 === str2);
    if (result) {
      console.log('✅✅✅' + "Assertion Passed:[%s] === [%s]",str1,str2);
    } else {
      console.log('🛑🛑🛑' + "Assertion Failed:[%s] !== [%s]",str1,str2);
    }
  };
  let itemToSearch =[];
  const countOnly = function (allItems,itemsToCount){
      //object to return
      const countObject ={};

      let searchString =[];
     
      for (var item in itemsToCount )
      {  
          
          if (itemsToCount[item] === true)
          {
            searchString.push(item);
             
          }
      }
      // iterate through allItems and apply filter to find out if it exists in the array
      for (let i= 0; i <searchString.length ; i++)
      {
          let count = 0;
          for(let j=0 ; j< allItems.length ;j++)
          { 
              if(searchString[i] == allItems[j])
               {
                   count = count +1;
               }
               
          }
          countObject[searchString[i]] = count;
         // console.log("search item is  "+ searchString[i] + " and count is  " + count);
      }
     
      return countObject;
             
  }

  //test cases
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  
  const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
  console.log(result1);
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);