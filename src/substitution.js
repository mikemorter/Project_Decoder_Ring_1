// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  // create original alphabet for input
  const alphabetInput = 'abcdefghijklmnopqrstuvwxyz';

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    // if there is no alphabet return false
    if (!alphabet) {
      return false;
    }
    // if alphabet is less than 26 return false
    if (alphabet.length !== 26) {
      return false;
    }
    
    // return false if substitution alphabet dows not conatin unique characters
    for (let firstLetter in alphabet) {
      for (let matchingLetter in alphabet) {
        if (alphabet[firstLetter] === alphabet[matchingLetter] && firstLetter != matchingLetter) {
          return false;
        }
      }
    }
    // make input all lower case
    input = input.toLowerCase();
    // create variable for the final output
    let finalOutput = '';
    for(let origLetter in input) {
      // skip spaces
      if (input[origLetter] === " ") {
        finalOutput += input[origLetter];
      };
      for(let letter in alphabetInput) {
        // if encode is true 
        if(encode === true) {
          if(input[origLetter] == alphabetInput[letter]) {
            finalOutput += alphabet[letter];
          }
          // if encode is false
        } else if(encode === false) {
          if(input[origLetter] === alphabet[letter]) {
              finalOutput += alphabetInput[letter];
          }
        }
      }
    }
    return finalOutput;
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
