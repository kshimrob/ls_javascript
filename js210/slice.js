function pushArray(array, value) {
  array[array.length] = value;
  return array;
}

function slice(array, startIndex, endIndex) {
  var newArray = [];
  for (var i = startIndex; i < endIndex; i++) {
    pushArray(newArray, array[i]);
  }
  return newArray;
}

slice([1, 2, 3, 4, 5], 0, 2);