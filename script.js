export function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

export function reverseString(string) {
  let newString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  return newString;
}
export const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  divide: (a, b) => a / b,
  multiply: (a, b) => a * b,
};
export function caesarCipher(string, shiftFactor) {
  let newString = "";
  for (let i = 0; i <= string.length - 1; i++) {
    if (string.charCodeAt(i) < 91 && string.charCodeAt(i) > 64) {
      newString += String.fromCharCode(
        ((string.charCodeAt(i) - 65 + shiftFactor) % 26) + 65
      );
    } else if (string.charCodeAt(i) < 123 && string.charCodeAt(i) > 96) {
      newString += String.fromCharCode(
        ((string.charCodeAt(i) - 97 + shiftFactor) % 26) + 97
      );
    } else {
      newString += string[i];
    }
  }
  return newString;
}

export function analyzeArray(array) {
  let sum = array.reduce((sum, value) => sum + value);
  const object = {
    average: sum / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
  return object;
}
