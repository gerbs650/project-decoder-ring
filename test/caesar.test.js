// Write your tests here!
const {caesar} = require('../src/caesar.js');
const expect = require("chai").expect;
 
describe("caesar cipher", () => {
        it("should shift 3 to the right", () => {
            let actual = caesar("thinkful", 3)
            let expected = 'wklqnixo'
            expect(actual).to.be.equal(expected)
        });
    
         it("should shift to the left", () => {
              let actual = caesar("thinkful", -3)
              let expected = 'qefkhcri' 
              expect(actual).to.equal(expected)
        });

        it("should encode", () => {
            let actual = caesar("wklqnixo", 3, false)
            let expected = 'thinkful'
            expect(actual).to.equal(expected)
        });

        it("should make into lower case", () => {
            let actual = caesar("This is a secret message!", 8)
            let expected = 'bpqa qa i amkzmb umaaiom!'
            expect(actual).to.equal(expected)
        });

        it("should make into lower case and encode", () => {
            let actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false)
            let expected = 'this is a secret message!'
            expect(actual).to.equal(expected)
        })
        it("should be false for no shift", () => {
            let actual = caesar("thinkful")
            let expected = false
            expect(actual).to.equal(expected)
        })
        it("should be false for more than 25", () => {
            let actual = caesar("thinkful", 99)
            let expected = false
            expect(actual).to.equal(expected)
        })
        it("should be false for less than -26", () => {
            let actual = caesar("thinkful", -26)
            let expected = false
            expect(actual).to.equal(expected)
        })

})


/*
caesar("thinkful", 3); //> 'wklqnixo' goes towards the right
caesar("thinkful", -3); //> 'qefkhcri' goes towards the left
caesar("wklqnixo", 3, false); //> 'thinkful'

caesar("This is a secret message!", 8); //> 'bpqa qa i amkzmb umaaiom!'
caesar("BPQA qa I amkzmb umaaiom!", 8, false); //> 'this is a secret message!'

caesar("thinkful"); //> false
caesar("thinkful", 99); //> false
caesar("thinkful", -26); //> false
*/
