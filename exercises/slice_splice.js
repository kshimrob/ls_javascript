function slice(array, start, end) {
  var newArray = [];

  // Set start or end to the length of the array if they are greater than array length
  if (start > array.length) {
    start = array.length;
  }

  if (end > array.length) {
    end = array.length;
  }

  // Push elements with indices between start and end to new array
  for (var i = start; i <= end - 1; i++) {
    newArray.push(array[i]);
  }

  return newArray;
}

function splice(array, start, deleteCount) {
    if (start > array.length) {
      start = array.length
    }

    if (deleteCount > (array.length - start)) {
      deleteCount = array.length - start;
    }

    

    return array;
}