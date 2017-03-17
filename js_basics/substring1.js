/*

INPUT:
(string, start, length)
start: If negative, treat it as strLength + start where strLength is the length of the string. 
For example, if start is -3, treat it as strLength - 3.
length:  If length exceeds the number of characters available, just use the available characters.

OUTPUT:
string snippet

RULES:
can use [] and .length
*/

function substr(string, start, length) {
  var substring = '';

  if (start < 0) {
    start = string.length + start;
  }

  for (var i = start; i < (start + length); i++) {
    if (string[i] === undefined) {
      break;
    }
    substring += string[i];
  }
  return substring;
}

var string = 'hello world';

substr(string, 2, 4);     // "llo "
substr(string, -3, 2);    // "rl"
substr(string, 8, 20);    // "rld"
substr(string, 0, -20);   // ""
substr(string, 0, 0);     // ""