/**

1. go through all numbers from 1 to the number and find what leaves no remainder with modulus. 
push to an array

2. find last element of first array

3. loop through elements of other array for a match

4. repeat but continue backwards through first array

https://dribbble.com/shots/3318285-Hair-Fur

**/ 



function divisors(num) {
  var inputDivisors = [];
  for (var i = 1; i < num; i++) {
    if (num%i == 0) {
      inputDivisors.push(i);
    }
  }
  return inputDivisors;
}

function gcd(divisors1, divisors2) {
  for (var i = divisors1.length - 1; i >= 0; i--) {
    for (var j = divisors2.length - 1; j >= 0; j--) {
      if (divisors2[j] === divisors1[i]) {
        return divisors2[j];
      }
    }
  }
}

var inputDivisors1 = divisors(24);
var inputDivisors2 = divisors(16);

gcd(inputDivisors1,inputDivisors2);


