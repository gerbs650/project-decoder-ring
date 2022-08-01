// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    // ignore capital letters
    // alphabet parameter is a string of 26 chars and UNIQUE, if more return false.
    // start with default ! return false statements
    // also need to keep spaces, regular expressions will probably be needed
    if (!alphabet) return false 
    if (alphabet.length !== 26) return false
    // add duplicate to return false
    if (Array.from(new Set(alphabet)).length !== 26) return false //review set data structure - set doesnt allow duplicates. take an array and pass through set to delete dupes
    // now add initial alphabet as string
    let alpha = 'abcdefghijklmnopqrstuvwxyz'
     alphabet = alphabet.split('') // split them up to match up with our alphabet
     input = input.toLowerCase() // turn the all into lower case as we get input
     // create two new objects to hold the new key value pairs
     let encoded = {} 
     let decoded = {}
     let result = ''

     alpha.split('').forEach((letter, index) => {
        encoded[letter] = alphabet[index] // making abc the keys and provided alpha the values.
        decoded[alphabet[index]] = letter // making abc as values and provided alphabet as key
     })
      if(!encode) encoded = decoded
      input.split('').forEach(input => {
        result += input === ' ' ? ' ' : encoded[input] // if there is space, return, otherwise return the input
      })
      return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };

