// Write your tests here!
const expect = require("chai").expect;
const polybius = require("../src/polybius");
// encoding a message
describe("polybius", () => {
  describe("encoding a message", () => {
    it("should translate the letters 'i' and 'j' to 42 when encoding", () => {
      expect(polybius("i")).to.equal('42');
      expect(polybius("j")).to.equal('42');
    })

    it("should maintain spaces and ignore capital letters", () => {
      expect(polybius("HELLO World")).to.equal('3251131343 2543241341');
    })

    it("should return a string of numbers when a message is in the input", () => {
      expect(polybius("thinkful")).to.equal("4432423352125413");
    })
  })

  // decoding a message
  describe("decoding a message", () => {
    it("should decode 42 to (i/j)", () => {
      expect(polybius("42", false)).to.eql("(i/j)");
    })
    it("should leave spaces as is", () => {
      expect(polybius("3251131343 2543241341", false)).to.equal("hello world");
    })

    it("should decode a message by translating each pair of numbers into a letter", () => {
      expect(polybius("4432423352125413", false)).to.equal("th(i/j)nkful");
    })

    it("should return false if the length of numbers is odd", () => {
      expect(polybius("321", false)).to.equal(false);
    })
  })
})