/* 
* Task: Check for Palindromes
* 
* Description: A palindrome is a word or sentence that's spelled the same way 
* both forward and backward, ignoring punctuation, case, and spacing.
* Return true if the given string is a palindrome. Otherwise, return false.
*/

// Implementation
function palindrome(str) {
  var oldStr = str.toLowerCase().replace(/[^a-z0-9]/g,'');
  var newStr = oldStr.split('').reverse().join('');
  
  if (oldStr === newStr) return true;
  else return false;
}

// Execution
palindrome("race car");
// Result: true

palindrome("never odd or even");
// Result: true

palindrome("0_0 (: /-\ :) 0-0");
// Result: true