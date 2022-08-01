// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  

  function caesar(input, shift, encode = true) {
    // your solution code here
    if (!shift || shift > 25 || shift < -25) return false;
    if (!encode) shift *= -1; // this is to have the shift in reverse
    return input.toLowerCase().split('').map((letter) => {
      if (letter.charCodeAt(0) < 97 ) return letter // return letter input if outside range (for !)
      let num = letter.charCodeAt(0) + parseInt(shift) 
      if (num > 122) {
        num = 96 + (num - 122)
      }
      else if (num < 97) {
        num += 26
      }
      
      return String.fromCharCode(num)
    }).join('')

  }

// for this function, we need to take in the string, then shift.
// caps should not matter - need to toLowerCase first
// need to make sure spaces are set accordingly

// maybe we need a master alphabet list to use and shift left and right from?
// nede to make sure encode false is active



  return {
    caesar,
  };
})();


/* abcdefghijklmnopqrstuvwxyz

caesar("thinkful", 3); //> 'wklqnixo'
caesar("thinkful", -3); //> 'qefkhcri'
caesar("wklqnixo", 3, false); //> 'thinkful'

caesar("This is a secret message!", 8); //> 'bpqa qa i amkzmb umaaiom!'
caesar("BPQA qa I amkzmb umaaiom!", 8, false); //> 'this is a secret message!'

caesar("thinkful"); //> false
caesar("thinkful", 99); //> false
caesar("thinkful", -26); //> false
*/







module.exports = { caesar: caesarModule.caesar };
