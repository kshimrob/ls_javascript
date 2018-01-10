// replace any hyphens with a dash
// break into words
// loop through words, take the first letter and push to a new array
// join all the letters in the new array and make them capitalized

function acronym(string) {
  var words =  string.replace('-', ' ').split(' ');
  var letters = [];
  for (var i = 0; i < words.length; i++) {
    letters.push(words[i][0]);
  }
  return letters.join('').toUpperCase();
}