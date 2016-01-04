/* 
* Task: Factorial
*
* Description: A factorial is a function that multiplies a number by every number below it. 
* For example 5!= 5*4*3*2*1=120. The factorial of 0 is 1.
*/

// Iteration implementation
function factorialize(num) {
  var result;

  if (num >= 0) result = 1;
  else return 0;	

  for (var i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}

// Recursion implementation
function factorialize(num) {
  if (num > 0) return num*factorialize(num-1);
  else if (num === 0) return 1;
  else return 0; 
}

// Execution
factorialize(5);
// Result: 120
