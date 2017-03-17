/*

INPUT:
3 args (string, start, end)

OUTPUT:
substring

*/

function substring (string, start, end) {
  var substring = '';

  if (end === undefined) {
    end = string.length;
  }

  if (start < 0 || isNaN(start)) {
    start = 0;
  }

  if (end < 0 || isNaN(end)) {
    end = 0;
  }

  if (start > string.length) {
    start = string.length;
  }

  if (end > string.length) {
    end = string.length;
  }

  if (end < start) {
    [start, end] = [end, start];
  }

  for (var i = start; i < end; i++) {
    substring += string[i];
  }

  return substring;
}

var string = 'hello world';

// substring(string, 2, 4);    // "ll"
// substring(string, 4, 2);    // "ll"
// substring(string, 0, -1);   // ""
// substring(string, 2);       // "llo world"
// substring(string, 'a');     // "hello world"
substring(string, 8, 20);   // "rld"