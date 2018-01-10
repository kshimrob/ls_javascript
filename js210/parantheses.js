/* 1. Break string up into individual characters
2. Keep a counter for ) (which is -1) and ( (which is positive 1)
3. If it becomes negative at any point, break and return false
4. If the final number is 0, return true */

function isBalanced(string) {
  var letters = string.split('');
  var counter = 0;
  for (var i = 0; i < letters.length; i++) {
    if (letters[i] === "(") {
      counter += 1;
    } else if (letters[i] === ")") {
      counter -= 1;
    }
    if (counter < 0) {
      return false;
    }
  }

  return counter === 0 ? true : false;
}