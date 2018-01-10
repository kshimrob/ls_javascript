function pop(array) {
  if (array.length === 0) {
    return undefined;
  } else {
    var poppedObject = array.splice(-1, 1);
    return poppedObject[0];
  }
}

// get length of the arguments[0] array
// insert an object into array with length + i
function push() {
  var initialLength = arguments[0].length;

  for (var i = 0, length = (arguments.length - initialLength); i < (arguments.length - 1); i++) {
    arguments[0][initialLength + i] = arguments[i + 1];
  }

  return arguments[0].length;
}