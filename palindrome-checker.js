function palindrome(str) {
    // 1) Lowercase input and remove non-alphanumeric characters
    const letNum = str.toLowerCase().match(/[a-z0-9]/g);
  
    // 2) return string === reverseString
    return letNum.join('') === letNum.reverse().join('');
  
  }
  // return output
  console.log(palindrome("eye")); 