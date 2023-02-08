//Caesars Cipher is a Caesars method of shifting letters to encrypt a message from enemies
// Rot13 means rating the caesars cipher 13 places
//

/*
    rot13 = (str) => 
    
    letters : "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K" "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"

    reference = "Hello"
    accumulator = " "
*/

function rot13(str) {

    // log letters in an object
    const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    // create letterChecker
    let letterChecker = "";
    
    // loop through the string
    for (let i = 0; i < str.length; i++){

        // capture each letter
        const char = str[i];
        const isLetter = letters.includes(char);

        // if char is not letter, add to letCk
        if (isLetter === false){
            letterChecker += char;
        } else {

        // else, rotate + or - 13, add to letCk
            // find the index of that letter (where is it position in the letters)
            const mainChar = letters.findIndex((c) => c === char);

            // add 13 to that letter or remove 13 from it
            letterChecker += letters[mainChar + 13] || letters[mainChar - 13];
        }
    }        
    // return letCk
    return letterChecker;
}

// run to see the results
// console.log(rot13("SERR PBQR PNZC"))
