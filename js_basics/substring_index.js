/*

V1:

input two strings
finds where the first instance of a substring in string1 that matches string 2
returns the index of the character where substring begins

V2:
input two strings
finds where the last instance of a substring in string1 that matches string 2
returns the index of the character where substring begins

BOTH WILL RETURN -1 IF NEITHER FINDS ANY MATCHES

MODEL1:

1. get the length of string 2
2. go through each character using index of string 1
  IF character matches str2[0] 
    LOOP through the remaining characters (need to know length of str2 to see how much to iterate)
    and see if they ALL match
    BREAK this loop if one of them never matches
    when they all match it will return the original index
  ELSE
    return -1

MODEL2:
1. get the length of string 2
2. go through each chracter and make an array whenever there is a match
3. get the LAST item in the array using array.length - 1, 
and then work forward in the array to see if there are full word matches

*/

function firstIndexOf(str1, str2) {
  substringLength = str2.length;
  for (var i = 0; i < str1.length; i++) {
    if (str1[i] === str2[0]) {
      var match = true;
      for (var j = 0; j < substringLength; j++) {
        if (str1[i + j] !== str2[j]) {
          match = false;
          break;
        }
      }
      if (match) {return i;}
    }
  }
  return -1;
}

function lastIndexOf(str1, str2) {
  stringLength = str1.length;
  substringLength = str2.length;

  for (var i = 1; i <= str1.length; i++) {
    if (str1[stringLength - i] === str2[0]) {
      var match = true;
      for (var j = 0; j < substringLength; j++) {
        if (str1[(stringLength - i) + j] !== str2[j]) {
          match = false;
          break;
        }
      }
      if (match) {return (stringLength - i);}
    }
  }
  return -1;
}

// function lastIndexOf(str1, str2) {
//   matchingIndices = [];
//   substringLength = str2.length;
//   for (var i = 0; i < str1.length; i++) {
//     if (str1[i] === str2[0]) {
//       matchingIndices.unshift(i);
//     }
//   }
//   if (matchingIndices.length > 0) {
//     for (var j = 0; j < matchingIndices.length; j++) {
//       for (var k = 0; k < substringLength; k++) {
//         match = true;
//         if (str1[matchingIndices[0] + k] !== str2[k]) {
//           match = false;
//           break;
//           matchingIndices.shift();
//         }
//       }
//       if (match) {return matchingIndices[0];}
//     }
//   }
//   return -1;
// }


lastIndexOf('Some strings', 's');                  // 11
lastIndexOf('Blue Whale, Killer Whale', 'Whale');  // 19
lastIndexOf('Blue Whale, Killer Whale', 'all');    // -1

firstIndexOf('Some strings', 's');
firstIndexOf('Blue Whale', 'Whale');
firstIndexOf('Blue Whale', 'Blute');
firstIndexOf('Blue Whale', 'leB'); 
