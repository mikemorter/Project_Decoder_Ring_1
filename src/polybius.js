// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  // create cipher
  const cipher = [
    ["A", "B", "C", "D", "E"],
    ["F", "G", "H", "I/J", "K"],
    ["L", "M", "N", "O", "P"],
    ["Q", "R", "S", "T", "U"],
    ["V", "W", "X", "Y", "Z"]
  ];
  // create function for encoding variable
  function polybiusEncode(input) {
    // create variable for result
    let result = "";
    // loop through input
    for(let letter in input) {
      // if input has spaces make sure to maintain them
      if(input[letter].includes(" ")){
        result += input[letter];
      };
      // loop through cipher
      for(let numberOne = 0; numberOne < cipher.length; numberOne++) {
        // create variable for index of cipher
        let match = cipher[numberOne];
        // loop through newly created variable
        for(let numberTwo = 0; numberTwo < match.length; numberTwo++){
          // if match number two includes the input letter add one to each number
          if(match[numberTwo].toLowerCase().includes(input[letter].toLowerCase())) {
            result += numberTwo + 1;
            result += numberOne + 1;
          } 
        }
      }
    }
    return result;
  }
  // create function for decoding input  
  function polybiusDecode(input) {
    // create result variable
    let result = "";
    // loop through the input
    for(let i = 0; i < input.length -1; i+=2) {
      // if input includes space then maintain the space
      if(input[i].includes(" ")){
        result += input[i];
        i--;
      } else {
        // create variable to point to new letter
        let newLetter = cipher[(input[i+1]-1)][(input[i]-1)];
        // if newletter equals I or J then return (I/J)
        if(newLetter === "I/J") { 
          newLetter = "(" + newLetter + ")";
          result += newLetter
        } else {
          result += newLetter;
        }
      }
    }
    return result.toLowerCase();
  }
    
  function polybius(input, encode = true) { 
    // if encode is true run polybiusEncode  
    if(encode === true){
      return polybiusEncode(input);
    } else {
      // if input is an odd number return false
      // create counter to test against input length
      let counter = 0;
      // loop through input
      for(let i in input) {
        if(input[i] === " "){
          counter += 1;
        };
      }
      if((input.length - counter) % 2 === 1) {
        return false;
      }
      // return decode 
      return polybiusDecode(input);
    };
  }

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
