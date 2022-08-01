// Write your tests here!
const {substitutionModule} = require("../src/substitution.js");
const {substitution} = require("../src/substitution.js");
const expect = require("chai").expect;

describe("subsitition cipher", () => {
    it('"thinkful", "xoyqmcgrukswaflnthdjpzibev"', () => {
        let actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev")
        let expected = 'jrufscpw'
        expect(actual).to.equal(expected)
    })
    it('"You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev"', () => {
        let actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")
        let expected = 'elp xhm xf mbymwwmfj dne'
        expect(actual).to.equal(expected)
    })
    it('"jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false', () => {
        let actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false)
        let expected = 'thinkful'
        expect(actual).to.equal(expected)
    })
    it('should encode with special chars', () => {
        let actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl")
        let expected = "y&ii$r&"
        expect(actual).to.equal(expected)
    })
    it('should decode with special characters', () => {
        let actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false)
        let expected = "message"
        expect(actual).to.equal(expected)
    })
    it('should return false for short alphabet', () => {
        let actual = substitution("thinkful", "short")
        let expected = false
        expect(actual).to.equal(expected)
    })
    it('should return false for lacking uniqueness', () => {
        let actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz")
        let expected = false
        expect(actual).to.equal(expected)
    })
})


// The input could include spaces and letters as well as special characters such as #, $, *, etc.
// Spaces should be maintained throughout.
// Capital letters can be ignored.
// The alphabet parameter must be a string of exactly 26 characters, which could include special characters such as #, $, *, etc. Otherwise, it should return false.
// All the characters in the alphabet parameter must be unique. Otherwise, it should return false.
1