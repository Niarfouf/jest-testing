import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./script";

test("capitalize", () => expect(capitalize("test")).toBe("Test"));
test("reverseString", () => expect(reverseString("essai")).toBe("iasse"));
test("calculator add", () => expect(calculator.add(1, 2)).toBe(3));
test("calculator subtract", () => expect(calculator.subtract(2, 1)).toBe(1));
test("calculator divide", () => expect(calculator.divide(6, 3)).toBe(2));
test("calculator multiply", () => expect(calculator.multiply(2, 2)).toBe(4));
test("caesarCipher", () => expect(caesarCipher("Zbc!", 1)).toBe("Acd!"));
test("analyzeArray", () =>
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  }));
