// Have a constant that is an array with all the digits (0 - 9)
// Break up the string into individual characters
// Find the length of the original string
// Go through the array and start by converting to the digit then * 10 ^ (length - 1)
// Subtract one from the length and then go to the next digit, etc.

var numbersToString = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function stringToInteger(string) {
  var digits = string.split('');
  var i;
  var finalInt = 0;
  var positive = true;

  // check to see if number has a positive or negative sign & deletes sign
  if (digits[0] === '+') {
    digits.splice(0, 1);
  } else if (digits[0] === '-') {
    digits.splice(0, 1);
    positive = false;
  }

  var stringLength = digits.length;

  for (i = 0; i < stringLength; i += 1) {
    finalInt += digits[i] * 10 ** (stringLength - 1 - i);
  }

  return !!positive ? finalInt : -(finalInt);
}