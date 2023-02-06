/* Roman numerals are represented by combination of latin alphabets serving as digits. These are employed by 7 capitalized letters, which are I,V,X,L,C,D,M and 'nulla' representing as none(zero).  
*/

// CHALLENGE : Convert the given number into a roman numeral.

/*
   ------------------------------------------------------------------------------------
  | Roman Numerals  |    M    |    D    |    C    |     L    |    X    |   V   |   1   |
   ------------------------------------------------------------------------------------
  | Arabic Numerals |   1000  |   500   |   100   |    50    |    10   |   5   |   I   |
   ------------------------------------------------------------------------------------ 


 */

function convertToRoman(num) {
    // 1 ) set romanToArab table (object) 
    // 2 ) all numerals should convert to upper-case
    const romanToArab = {
        M : 1000, CM : 900, D : 500, CD : 400, C : 100, XC : 90, L : 50, XL : 40, X : 10, IX : 9, V : 5, IV : 4, I : 1,    
    };
    
    // 3 ) set numAccumulator
    let numLog = '';
    for (const main in romanToArab) {
        // 4 ) converting to roman numerals
        const numCheck = romanToArab[main];

        // 5 ) when currentNum <= num
        while (numCheck <= num) {
            num -= numCheck; 
            numLog += main;
        }
    }


    // 6 ) return string === numLog
    return numLog;
}

// 7 ) use console.log to output the numeral
convertToRoman(37);


