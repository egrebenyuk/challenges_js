/* 
* Task: Diff Two Arrays
*
* Description: Compare two arrays and return a new array with any items 
* only found in one of the original arrays.
*/

// Simple implementation
function diff(arr1, arr2) {
  var newArr = [];

  for(var i=0; i<arr2.length; i++){
    if(arr1.indexOf(arr2[i])<0 && newArr.indexOf(arr1[i])<0)
      newArr.push(arr2[i]);
  }
  
  for(var i=0; i<arr1.length; i++){
    if(arr2.indexOf(arr1[i])<0 && newArr.indexOf(arr1[i])<0)
      newArr.push(arr1[i]);
  }   
  
  return newArr;
}

// Enhanced implementation
function diff(arr1, arr2) {
  var newArr = arr1.concat(arr2);

  function check(item) {
    if (arr1.indexOf(item) === -1 || arr2.indexOf(item) === -1) {
      return item;
    }
  }

  return newArr.filter(check);
}

// Execution
diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
// Result: [4]

diff(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
//Result: ["pink wool"]
