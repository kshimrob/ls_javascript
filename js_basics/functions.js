function average(a) {
  return sum(a) / a.length
}

function sum(a){
  total = 0;
  for (var i = 0; i < a.length; i++){
    total += a[i];
  }
  return total;
}

console.log(average([3,4,5]));