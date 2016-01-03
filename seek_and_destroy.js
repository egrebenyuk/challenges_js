/* 
* Task: Seek and Destroy
*
* Description: You will be provided with an initial array (the first argument 
* in the destroyer function), followed by one or more arguments. Remove all 
* elements from the initial array that are of the same value as these arguments.
*/

function destroyer(arr) {
  function cleanup(value) {
    // Implementation #1
    return args.indexOf(value) === -1; 
      
    // Implementation #2
    // for(var i=0; i<args.length; i++) { 
    //   if (value === args[i]) return false;
    // }
    // return true;
  }
  
  var args = Array.prototype.slice.call(arguments, 1);
  var result = arr.filter(cleanup);
  
  return result;
}

// Execution
destroyer([1, 2, 3, 1, 2, 3], 2, 3); 
// Result: [1,1]