import anyCharacterFrom from "../src/any-character-from";
import VerEx from "../src/verex";
import "./custom-matchers";

describe("anyCharacterFrom(characters)", () => {
  const exp = VerEx(/^/, anyCharacterFrom([["a", "f"], [0, 9], " ", "_"]), /$/);

  it("should be a function", () => {
    expect(anyCharacterFrom).toBeInstanceOf(Function);
  });

  it("should match a character in the passed set", () => {
    expect(exp).toMatchString("a");
    expect(exp).toMatchString("b");
    expect(exp).toMatchString("5");
    expect(exp).toMatchString(" ");
    expect(exp).toMatchString("_");
  });

  it("should not match a character not in the passed set", () => {
    expect(exp).not.toMatchString("g");
    expect(exp).not.toMatchString("%");
    expect(exp).not.toMatchString("A");
  });

  it("should not match an empty string", () => {
    expect(exp).not.toMatchString("");
  });

  it("should not match more than one character", () => {
    expect(exp).not.toMatchString("abc");
  });

  it.todo("should work with predefined character classes");
});
