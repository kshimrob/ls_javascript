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

  if (typeof str !== "string") {
    return "This is not a string.";
  }

  for (var i = 0; i < str.length; i++) {
    asciiCode = str[i].charCodeAt();
    if ((asciiCode > 64 && asciiCode <= 77) || (asciiCode > 96 && asciiCode <= 109)) {
      asciiCode += 13;
    } else if ((asciiCode > 77 && asciiCode <= 90) || (asciiCode > 109 && asciiCode <= 122)) {
      asciiCode -= 13;
    }
    newString += String.fromCharCode(asciiCode);
  }

  return newString;
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));

// logs:
Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));

// logs:
Teachers open the door, but you must enter by yourself.