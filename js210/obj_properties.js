// Write a function named objectHasProperty that takes two arguments: an Object and a String. 
// The function should return true if the Object contains a property with the name given by 
// the String, false otherwise.

function objectHasProperty(obj, string) {
  if (string in obj) {
    return true; } 
  return false;
}

// function objectHasProperty(object, propertyName) {
//   var keys = Object.keys(object);
//   return keys.indexOf(propertyName) !== -1;
// }


// Write a function named incrementProperty that takes two arguments: an Object and a String. 
// If the Object contains a property with the specified name, the function should increment 
// the value of that property. If the property does not exist, the function should add a new 
// property with a value of 1. The function should return the new value of the property.

function incrementProperty(obj, string) {
  if (string in obj) {
    obj[string] += 1;
  } else {
    obj[string] = 1;
  }

  return object[propertyName];
}

// Write a function named copyProperties that takes two Objects as arguments. The function 
// should copy all properties from the first object to the second. The function should return 
// the number of properties copied.

function copyProperties(obj1, obj2) {
  for (key in obj1) {
    obj2[key] = obj1[key];
  }
  return Object.keys(obj1).length;
}

// Write a function named wordCount that takes a single String as an argument. The function 
// should return an Object that contains the counts of each word that appears in the provided 
// String. In the returned Object, you should use the words as keys, and the counts as values.

function wordCount(text) {
  var count = {};
  var words = text.split(' ');
  var word;

  for (var i = 0; i < words.length; i++) {
    word = words[i];
    if (!count[word]) {
      count[word] = 0;
    }

    count[word] += 1;
  }

  return count;
}

