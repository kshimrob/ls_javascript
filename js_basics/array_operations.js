function push(arr, value) {
  arr[arr.length] = value;
}

function pop(array) {
  var newLength = array.length - 1;
  var value = array[newLength];
  array.length = newLength;
  return value;
}

function unshift(arr, value) {
  newArr = [value];
  for (var i = 0; i <= arr.length; i++) {
    newArr[i + 1] = arr[i];
  }
  return newArr;
}

function shift(arr) {
  
}