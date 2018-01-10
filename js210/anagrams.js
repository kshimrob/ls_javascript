// break up the word into characters => returns array (split)
// go over each word in the array => each
// create a new object of characters so we can "match"
// go over each letter in the word and "match"

function anagram(word, list) {
  return list.filter(function (candidate) {
    return areAnagrams(candidate, word);
  });
}

function anagram(word, list) {
  return list.filter(function (candidate) {
    return areAnagrams(candidate, word);
  });
}

function areAnagrams(source, target) {
  var sourceLetters = // sorted source letters;
  var targetLetters = // sorted target letters;
  return compareArrays(sourceLetters, targetLetters);
}

function compareArrays(array1, array2) {
  // compare two arrays
}