function findLongestWord (string = "") {
    // Write code under this line
    let arrayOfStrings = string.split(' ');
    let longestWord = '';
    let wordLength = 0;

    for (let i = 0; i < arrayOfStrings.length; i += 1) {
        if (arrayOfStrings[i].length > wordLength) {
            wordLength = arrayOfStrings[i].length;
            longestWord = arrayOfStrings[i];
        }
    }
    return longestWord;
  }
                               
  console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
  // 'jumped'
  
  console.log(findLongestWord('Google do a roll'));
  // 'Google'
  
  console.log(findLongestWord('May the force be with you'));
  // 'force'    