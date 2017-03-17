/*

INPUT:
string

OUPUT:
string in all lower case

RULES:
[] .length only
*/

function toLowerCase(str) {
  var CONVERSION_OFFSET = 32;
  newString = '';

  for (var i = 0; i < str.length; i++) {
    var asciiCode = str.charCodeAt(i);
    if (asciiCode < 91 && asciiCode > 64) {
      asciiCode += CONVERSION_OFFSET;
      newString += String.fromCharCode(asciiCode);
    } else {
      newString += str[i];
    }
  }
  return newString;
}

toLowerCase('ALPHABET');      // "alphabet"
toLowerCase('123');           // "123"
toLowerCase('abcDEF');        // "abcdef"