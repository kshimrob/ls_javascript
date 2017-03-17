/*

INPUT:
-string
>> Do I need to validate for other input types? Error messages? What about an empty string?

OUTPUT:
-string with NO SPACES on either end

RULES:
1. Can use [] to access characters
2. .length property to find string length

MODEL:
1. Iterate from the beginning with FOR loop
2. Find the first index where the character is !== " "
3. Find the last index where the character is !==" "
3. Delete everything from beginning to that character...
  a) set the first char[0] = the first index of a non-space and shift forward...
4. Iterate from the end of the string with FOR loop
5. Find the first index where the character is !== " "
6. Delete everything from the end to the string
*/

function trim (str) {
  var newString = "";
  var lastIndex = str.length - 1;
  var firstTrimIndex;
  var lastTrimIndex;

  if (str[0] !== " " && str[lastIndex] !== " ") {
    return str;
  }

  for (var i = 0; i < lastIndex; i++) {
    if (str[i] !== " ") {
      firstTrimIndex = i;
      break;
    }
  }

  for (var j = lastIndex; j > 0; j--) {
    if (str[j] !== " ") {
      lastTrimIndex = j;
      break;
    }
  }

  var newStringLength = lastTrimIndex - firstTrimIndex;

  for (var k = 0; k <= newStringLength; k++) {
    newString += str[firstTrimIndex + k];
  }
  return newString;
}

trim('  abc  ');  // "abc"
trim('abc   ');   // "abc"
trim(' ab c');    // "ab c"
trim(' a b  c');  // "a b  c"
trim('      ');   // ""
trim('');         // ""