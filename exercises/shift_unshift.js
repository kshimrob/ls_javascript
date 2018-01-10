// For shift:
// loop through the old array and push to the new array BUT ignore the zero index value. return value.

// For unshift:
// loop through the parameters first and push to new array, then loop through old array (keep track of index somehow)

// https://spin.atomicobject.com/2011/04/10/javascript-don-t-reassign-your-function-arguments/

function shift(array) {
  if (array.length === 0) { return undefined; }

  var oldArrayVals = array.slice();
  var newLength = oldArrayVals.length - 1;

  for (var i = 0; i < array.length; i++) {
    array[i] = oldArrayVals[i + 1];
  }

  array.length = newLength;

  return oldArrayVals[0];
}

// figure out what's going on with changing the original variable

function unshift() {
  var oldArray = arguments[0];

  for (var i = 0; i < arguments.length - 1; i++) {
    arguments[0] = arguments[i + 1];
  }

  var baseLength = newArray.length;

  for (var j = 0; j < oldArray.length; j++) {
    newArray[baseLength + j] = oldArray[j];
  }

  arguments[0] = newArray;
  return arguments[0];
}





function unshift(arr) {
  var newItemCount = arguments.length - 1;

  for (var i = (arr.length + newItemCount - 1); i > newItemCount - 1; i--){
    arr[i] = arr[i - newItemCount]
  }

  for (var j = 0; j < newItemCount; j++){
    arr[j] = arguments[j + 1];
  }

  return arr.length;
}