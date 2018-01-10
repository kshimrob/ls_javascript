// split original string into individual letters
// loop through the array and push the letters to a new array in reverse
// then join all the characters again in the new array

function reverse(string) {
  var letters = string.split('');
  var newLetters = [];
  for (var i = letters.length - 1; i >= 0; i--) {
    newLetters.push(letters[i]);
  }
  return newLetters.join('');
}