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
      }
     return countObject;
           
  }

  

module.exports = countOnly;