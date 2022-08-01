// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
// you can add any code you want within this function scope

  // input refers to text that needs to be encoded or decoded
 // only spaces and letters are included
  // output needs to be string ('')
  // when decoding, number of characters in string excluding spaces should be even, otherwise return false
  // ignore capital letters
  // i/j need to have both output and input when called
  function polybius(input, encode = true) {
    // your solution code here
    
    // start with object of alphabet
    
    let alphabet = {
      a: "11", b: "21", c: "31", d: "41", e: "51", 
      f: "12", g: "22", h: "32", i: "42", j: "42", k: "52", 
      l: "13", m: "23", n: "33", o: "43", p: "53",
      q: "14", r: "24", s: "34", t: "44", u: "54", 
      v: "15", w: "25", x: "35", y: "45", z: "55", [' ']: " " // empty space will be empty space
    };

    // do decoded format 
    let decodedAlphabet = {
      11: "a", 12: "f", 13: "l", 14: "q", 15: "v", 
      21: "b", 22: "g", 23: "m", 24: "r", 25: "w", 
      31: "c", 32: "h", 33: "n", 34: "s", 35: "x", 
      41: "d", 42: "(i/j)", 43: "o", 44: "t", 45: "y",
      51: "e", 52: "k", 53: "p", 54: "u", 55: "z", [' ']: " "
    };
if(encode) {
  return input.split('').map(letter => {
    return alphabet[letter.toLowerCase()]
  }).join('')
} else {
  if(input.replace(/\s/g,'').length %2 !== 0) return false // we are replacing empty spaces with string of " " space -- need to review regular expressions
    return input.match(/[0-9]{2}|\s/g).map(number => { //character has to be digit 0-9 and only 2 digits max, can also be a space
      return decodedAlphabet[number]
    }).join('')
  }
}


  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
