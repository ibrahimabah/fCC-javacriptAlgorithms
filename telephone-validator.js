// Telephone Number Validator
// CHALLENGE : validate or reject US telephone numbers based provided formats

/*
    
 */

function telephoneCheck(str) {
    const valTel = [
      // 555-555-5555
      /^\d{3}-\d{3}-\d{4}$/,
  
      //  1 555-555-5555
      /^1 \d{3}-\d{3}-\d{4}$/,
  
      //  1 (555) 555-5555
      /^1 \(\d{3}\) \d{3}-\d{4}$/,
  
      //  5555555555
      /^\d{10}$/,
  
      //  (555)555-5555
      /^\(\d{3}\)\d{3}-\d{4}$/,
  
      //  1(555)555-5555
      /^1\(\d{3}\)\d{3}-\d{4}$/,
  
      //  1 555 555 5555
      /^1 \d{3} \d{3} \d{4}$/
    ]
    return valTel.some((telephone) => telephone.test(str));
  }
  
  console.log(telephoneCheck("555-555-5555"));
  