function myForEach(array, func) {
  var i;
  for (i = 0; i < array.length; i+= 1) {
    func(array[i]);
  }
}

function myFilter(array, func) {
  var newArray = [];

  array.forEach(function (value) {
    if (func(value)) {
      newArray.push(value);
    }
  });

  return newArray;
}

function myMap(array, func) {
  var newArray = [];

  array.forEach(function (value) {
    newArray.push(func(value));
  });

  return newArray;
}

function myReduce(array, func, initial) {
  var value;
  var index;

  // If the initial value is not given as an argument, set the value to the first item in the array. If it is provided,
  // set the value variable to the argument.
  if (initial === undefined) {
    value = array[0];
    index = 1;
  } else {
    value = initial;
    index = 0;
  }

  array.slice(index).forEach(function (element) {
    value = func(value, element);
  });

  return value;
}

function myOwnEvery(array, func) {
  var i;
  for (i = 0; i < array.length; i += 1) {
    if (!func(array[i])) {
      return false;
    }
  }

  return true;
}