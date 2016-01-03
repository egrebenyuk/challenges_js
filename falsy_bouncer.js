/* 
* Task: Falsy Bouncer
*
* Description: Remove all falsy values from an array.
* Falsy values in javascript are false, null, 0, "", undefined, and NaN.
*/

function bouncer(arr) {
  var result = arr.filter(realValues);
  return result;
}

function realValues(value) {
  return Boolean(value);
}

// Execution
bouncer([7, "ate", "", false, 9]); 
// Result: [7, "ate", 9]
