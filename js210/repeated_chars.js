/* 
Implement a function that takes a String as an argument and returns an object 
that contains a count of the repeated characters.

Note that repeatedCharacters does a bit more than simply count the frequency of 
each character: it determines the counts, but only returns counts for characters 
that have a count of 2 or more. It also ignores the case.
*/

function repeatedCharacters(string) {
  var letters = string.toLowerCase().split("");
  var frequencies = {};

  for (var i = 0; i < letters.length; i++) {
    frequencies.hasOwnProperty(letters[i]) ? frequencies[letters[i]] ++ : frequencies[letters[i]] = 1;
  }

  for (letter in frequencies) {
    if (frequencies[letter] < 2) {
      delete frequencies[letter];
    }
  }

  return frequencies;
}