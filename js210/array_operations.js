function pushArray(array, value) {
  array[array.length] = value;
  return array;
}

function pop_array(array) {
  var newLength = array.length - 1;
  var removedValue = array[newLength];
  array.length = newLength;
  return removedValue;
}

function unshift_array(array, value) {
  newArray = [value];
  for (var i = 0; i < array.length; i++) {
    newArray[i + 1] = array[i];
  }
  array = newArray;
  return array.length;
}

function shift_array(array) {
  var removedValue = array[0];
  for (var i = 0; i < array.length; i++) {
    array[i] = array[i + 1];
  }
  array.length = array.length - 1;
  return removedValue;
}

function indexOf(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] == value) {
      return i;
    }
  }

  return -1;
}

function lastIndexOf(array, value) {
  for (var i = array.length - 1; i > 0; i--) {
    if (array[i] == value) {
      return i;
    }
  }

  return -1;
}

function slice(array, startIndex, endIndex) {
  var newArray = [];
  for (var i = startIndex; i < endIndex; i++) {
    pushArray(newArray, array[i]);
  }
  return newArray;
}

function splice(array, begin, number) {
  var removedValues = [];
  for (var i = 0; i < array.length; i++) {
    if (i < begin + number) {
      push(removedValues, array[i]);
    }

    array[i] = array[i + number];
  }

  array.length = array.length - number;
  return removedValues;
}

function concat(array1, array2) {
  var newArray = [];
  for (var i = 0; i < array1.length; i++) {
    pushArray(newArray, array1[i]);
  }
  for (var j = 0; j < array2.length; j++) {
    pushArray(newArray, array2[j]);
  }
  return newArray;
}

function join(array, string) {
  var newString = '';
  for (var i = 0; i < array.length - 1; i++) {
    newString = newString + (String(array[i]) + string);
  }
  return (newString + array[array.length - 1]);
}

/* 

- iterate through each element in the array and coerce into a String object and add with string argument
- add the final "product" to newString