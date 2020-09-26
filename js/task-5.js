function checkForSpam (message) { 
    'use strict';
    // Write code under this line
    let str = message.toLowerCase();
    let checkString = true;

    if (str.includes('spam')){
        checkString = true;
    }
    else if (str.includes('sale')) {
        checkString = true;
    }
    else {
        checkString = false;
    }
    return checkString;
  }
  
  console.log(checkForSpam('Latest technology news')); // false
  
  console.log(checkForSpam('JavaScript weekly newsletter')); // false
  
  console.log(checkForSpam('Get best sale offers now!')); // true
  
  console.log(checkForSpam('[SPAM] How to earn fast money?')); // true