// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // if shift is not present, 0, greater than 25, less than -25 return false
  if (!shift || shift === 0 || shift > 25 || shift < -25) {
    return false;
  }
  // if encode equals false create new shift  
  if (encode === false) {
    shift = shift * (-1);
  };
  // make all letters lowercase
  input = input.toLowerCase();
  // create string variable for decodedMessage
  let decodedMessage = "";  
  // loop through input
  for (let letter in input) {
    // create char variable that gets the value each letter from charCodeAt
    let char = input.charCodeAt(letter);
    // if char is greater than 97 and less than 122
    if (char >= 97 && char <= 122) {
      // add shift to char
      let newLetter = char + shift
      // if newLetter goes above charCode then loop it back
      if (newLetter > 122) {
        char = 96 + ((char + shift) - 122);
        decodedMessage += String.fromCharCode(char);
        // if newLetter is less than charCode then loop it back
      } else {
        if (newLetter < 97) {
          char = 122 - (96 - (char + shift));
          decodedMessage += String.fromCharCode(char);
          // add newLetter that are inbetween 97 and 122
        } else {
          decodedMessage += String.fromCharCode(newLetter);
        }
      }
    } else {
      decodedMessage += input[letter];
    };
  };
  // return decodedMessage
  return decodedMessage;
};

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
