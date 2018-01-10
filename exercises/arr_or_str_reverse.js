// For this exercise you will re-implement the Array.prototype.reverse() method. 
// This implementation differs from the built-in, in that it can take either a 
// string or an array as an argument and consequently it returns a new string or array.

function reverse(inputForReversal) {
  var items = [];
  var reversedItems = [];
  var isString = false;

  if (typeof inputForReversal === "string") {
    items = inputForReversal.split("");
    isString = true;
  } else {
    items = inputForReversal;
  }

  for (var i = (items.length - 1); i >= 0; i--) {
    reversedItems.push(items[i]);
  }

  return isString ? reversedItems.join('') : reversedItems;  
}