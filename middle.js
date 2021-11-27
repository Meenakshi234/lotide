// middel function
const middle = function(array){
    let outputArray = [];
    if(typeof array !='undefined' && array != null && array.length > 2 ){
        let lengthArray = array.length;
        let middle = Math.floor(lengthArray / 2);
        if(lengthArray % 2 === 0){
            outputArray.push(array[middle-1]);
            outputArray.push(array[middle]);
            return outputArray;
        } else {
            outputArray.push(array[middle]);
            return outputArray;
        }     
    } else {
          return outputArray;
    }
   
}
module.exports = middle;
