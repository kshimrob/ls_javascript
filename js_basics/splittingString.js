/*

INPUT:
-string, delimiter

OUTPUT:
-splits the string at the delimiters, console.logging each split string separately
-IF NO DELIMITER IS PROVIDED, THEN CONSOLE.LOG(ERROR: NO DELMITER)
-if an empty string is provided as a delmiter, then the string is split by each character
-if delimiter is not found in the string, then the string is returned as is
-if delimiter is found at beginning of the string, should return a blank line

RULES:
Can only use [] and .length

MODEL:
1.have true/false for copying mode or not
2.loop through each value and add to a new string, and IF the delimiter is hit, 
then change copying mode to false
3. console.log the current line
4. make the variable equal to an empty string again


*/

function splitString(str, delimiter) {
  if (typeof delimiter === undefined) {
    console.log("ERROR: No Delimiter");
    return;
  }

  var newString = '';
  for (var i = 0; i <= str.length; i++) {
    if (str[i] === delimiter) {
      console.log(newString);
      newString = '';
    } else if (delimiter === '') {
      console.log(str[i]);
    } else {
      newString += str[i];
    }

    if (newString) {
      console.log(newString);
    }
  }
}

splitString('abc,123,hello world', ',');
splitString('hello');
splitString('hello', '');
splitString('hello', ';');
splitString(';hello;', ';');

