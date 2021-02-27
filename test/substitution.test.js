// Write your tests here!
const expect = require("chai").expect;
const substitution = require("../src/substitution");

describe("substitution", () => {
  // error handling
describe("error handling", () => {
  it("should return false if the substitution alphabet is missing", () => {
    expect(substitution("thinkful", " ")).to.equal(false);
  })

  it("should return false if the substitution alphabet is not exactly 26 characters", () => {
    expect(substitution("thinkful", "aghsjkd")).to.equal(false);
  })

  it("should return false if the substitution alphabet does not contain unique characters", () => {
    expect(substitution("thinkful", "abcabcabcabcabcabcabcabcyz")).to.equal(false);
  })
})
  // encoding a message
describe("encoding a message", () => {
  it("should encode a message by using the given substitution alphabet", () => {
    expect(substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev")).to.equal("jrufscpw");
  })

  it("should work with any kind of key with unique characters", () => {
    expect(substitution("message", "$wae&zrdxtfcygvuhbijnokmpl")).to.equal("y&ii$r&")
  })

  it("should preserve spaces and ignore capitol letters", () => {
    expect(substitution("YOU are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")).to.equal("elp xhm xf mbymwwmfj dne");
  })
})
  // decoding a message
describe("decoding a message", () => {
  it("should decode a message by using the given substitution alphabet", () => {
    expect(substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false)).to.equal("thinkful");
  })

  it("should work with any kind of key with unique characters", () => {
    expect(substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false)).to.equal("message");
  })

  it("should preserve spaces", () => {
    expect(substitution("elp xhm xf mbymwwmfj dne", "xoyqmcgrukswaflnthdjpzibev", false)).to.equal("you are an excellent spy");
  })
})
})