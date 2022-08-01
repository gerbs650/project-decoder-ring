// Write your tests here!

const {polybius} = require("../src/polybius.js");
const expect = require("chai").expect;

describe("polybius cipher", () => {
    it("should encode", () => {
        let expected = polybius("thinkful")
        let actual = "4432423352125413"
        expect(actual).to.eql(expected)
    })
    it("should encode and change to lower caps and leave space", () => {
        let expected = polybius("Hello world")
        let actual = "3251131343 2543241341"
        expect(actual).to.eql(expected)
    })
    it("should decode", () => {
        let expected = polybius("3251131343 2543241341", false)
        let actual = "hello world"
        expect(actual).to.eql(expected)
    })
    it("should encode i/j", () => {
        let expected = polybius("4432423352125413", false)
        let actual =  "th(i/j)nkful"
        expect(actual).to.eql(expected)
    })
    it("should be false", () => {
        let expected = polybius("44324233521254134", false)
        let actual = false
        expect(actual).to.eql(expected)
    })

})


// polybius("thinkful"); //> "4432423352125413"
// polybius("Hello world"); //> '3251131343 2543241341'

// polybius("3251131343 2543241341", false); //> "hello world"
// polybius("4432423352125413", false); //> "th(i/j)nkful
// polybius("44324233521254134", false); //> false