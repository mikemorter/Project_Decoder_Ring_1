// Write your tests here!
const expect = require("chai").expect;
const caesar = require("../src/caesar");

describe("caesar", () => {
  // Error Handling
  it("should return false if shift value is not present, 0, less than -25, greater than 25", () => {
    expect(caesar("thinkful")).to.equal(false);
    expect(caesar("thinkful", 0)).to.equal(false);
    expect(caesar("thinkful", -26)).to.equal(false);
    expect(caesar("thinkful", 99)).to.equal(false);
  })
  // encoding message
  it("should shift backwards if a negative number is used", () => {
    expect(caesar("thinkful", -3)).to.equal('qefkhcri');
  })
  it("should maintain spaces as well other non-alphabetic symbols", () => {
    const actual = caesar("This is a secret message!", 8);
    expect(actual).to.equal('bpqa qa i amkzmb umaaiom!');
  })
  // decoding a message
  it("should decode a message when encode equals false", () => {
    const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
    expect(actual).to.equal('this is a secret message!');
  })

})