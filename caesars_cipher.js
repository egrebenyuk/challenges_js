/* 
* Task: Caesars Cipher
*
* Description: A common modern use is the ROT13 cipher, where the values of the 
* letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on. Write 
* a function which takes a ROT13 encoded string as input and returns a decoded 
* string. All letters will be uppercase. Do not transform any non-alphabetic 
* character (i.e. spaces, punctuation), but do pass them on.
*/

function rot13(encodedStr) {
  var codeArr = encodedStr.split("");  
  var decodedArr = [];
  
  for(var i=0; i<codeArr.length; i++) {
    var code = codeArr[i].charCodeAt(0);
    if (code>64 && code<78)
      code+=13;
    else if (code>77 && code<91)
      code-=13;    
    decodedArr.push(String.fromCharCode(code));
  }  
  return decodedArr.join(""); 
}

// Execution
rot13("SERR PBQR PNZC");
// Result: FREE CODE CAMP