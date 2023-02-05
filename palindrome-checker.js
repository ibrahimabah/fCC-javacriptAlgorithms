/* A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing. */

// CHALLENGE : Return true if the given string is a palindrome. Otherwise, return false


function palindrome(str) {
    // 1) Lowercase input and remove non-alphanumeric characters
    const letNum = str.toLowerCase().match(/[a-z0-9]/g);
  
    // 2) return string === reverseString
    return letNum.join('') === letNum.reverse().join('');
  
  }
  // return true or false
  console.log(palindrome("eye")); 