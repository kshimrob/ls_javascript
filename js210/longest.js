/*
1. split text by delimiters (? or . or !) => regex
2. sort the array by number of words in each sentence
3. log the sentence with the most words and word count

*/

function longestSentence(text) {
  var sentences = text.split(/\? |\. |! /);
  sentences = sentences.sort(function (a, b) {
    return a.split(' ').length > b.split(' ').length;
  });

  var longest = sentences[sentences.length - 1];
  console.log(longest);
  console.log('The longest sentence has ' + longest.split(' ').length + ' words.');
  console.log(longest.split(' '));
}

longestSentence(longText);