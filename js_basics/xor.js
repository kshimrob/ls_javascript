function isXor(val1, val2) {
  if ((val1 && val2)||(!val1 && !val2)){
    return false;
  }
  return true;
}

console.log(isXor(false, 3));        // true
console.log(isXor('a', undefined));  // true
console.log(isXor(null, ''));        // false
console.log(isXor('2', 23));         // false
