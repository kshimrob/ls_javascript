/*

INPUT:
string

>>> Can I assume that inputs are always strings?
>>> What should I return for an empty string? Itself?

OUTPUT:
string
> case is preserved
> changed to 13 positions later in the alphabet (create a constant)
> characters that are NOT letters should be left alone and returned as is

IDEAS:
> ascii 
> .charCodeAt
> String.fromCharCode

*/

function rot13(str) {
  var newString = '';
  var asciiCode;

  LETTER_SHIFT = 13;
  CAPITAL_A = 65;
  CAPITAL_M = 77;
  CAPITAL_Z = 90;
  LOWERCASE_A = 97;
  LOWERCASE_M = 109;
  LOWERCASE_Z = 122;

  if (typeof str !== "string") {
    return "This is not a string.";
  }

  for (var i = 0; i < str.length; i++) {
    asciiCode = str[i].charCodeAt();
    if ((asciiCode >= CAPITAL_A && asciiCode <= CAPITAL_M) || (asciiCode >= LOWERCASE_A && asciiCode <= LOWERCASE_M)) {
      asciiCode += 13;
    } else if ((asciiCode > CAPITAL_M && asciiCode <= CAPITAL_Z) || (asciiCode > LOWERCASE_M && asciiCode <= LOWERCASE_Z)) {
      asciiCode -= 13;
    }
    newString += String.fromCharCode(asciiCode);
  }

  return newString;
}

/*
console.log(rot13('Teachers open the door, but you must enter by yourself.'));

// logs:
Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));

// logs:
Teachers open the door, but you must enter by yourself.

*/