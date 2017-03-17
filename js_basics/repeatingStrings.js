/*

INPUT: 
Two args (str, num)
num => "times to repeat"

OUTPUT:
If second arg is not a number, return undefined
If 2nd arg is negative, return undefined
If 2nd arg is 0, return empty string

MODEL:

*/

function repeat(str, times) {
  if (times < 0 || !Number.isInteger(times)) {
    return undefined;
  }

  var repeatedString = '';
  for (var i = 0; i < times; i++) {
    repeatedString += str;
  }
  
  console.log(repeatedString);
}

repeat('abc', 1);    // "abc"
repeat('abc', 2);    // "abcabc"
repeat('abc', -1);   // undefined
repeat('abc', 0);    // ""
repeat('abc', 'a');  // undefined