/* 
go over each element in one array, and then "cross it off" in the second array. 
if all the elemnts in the second array have been "crossed off", then return true. otherwise false.

option one:
create an object from the array and set them all to false. then go over them.

option two:
make a copy of array2. when there is a "match", delete from array2 copy. should be empty.

*/

function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  var array2Copy = array2;

  for (var i = 0; i < array1.length; i++) {
    // see if the element is in the second array
    var index = array2Copy.indexOf(array1[i]);
    if (index > -1) {
      // delete the element from the second array
      array2Copy.splice(index, 1);
    }
  }

  return array2Copy.length === 0;
}