const capitalize = require("./main");
const reverseString = require("./main");

describe("capitalize", () => {
  test("works with all letters lowercase", () => {
    expect(capitalize("firstupper")).toBe("Firstupper");
  });
  test("works with not all letters lowercase", () => {
    expect(capitalize("fEnCe")).toBe("Fence");
  });
});

describe("reverseString", () => {
  test("actually reversing", () => {
    expect(reverseString("olleh")).toBe("hello");
  });
});
