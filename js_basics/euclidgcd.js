function gcd(int1, int2) {
  var dividend = int1;
  var divisor = int2;


  while (true) {
    var remainder = dividend%divisor;
    if (remainder === 0) {
      return divisor;
    } else {
      dividend = divisor;
      divisor = remainder;
    }
  }
}

function multipleGcd(arr) {
  var int1 = arr[0];
  var int2 = arr[1];
  if (arr.length == 2) return gcd(int1, int2);
  for (var i = 1; i < arr.length; i++) {
    int1 = gcd(int1, int2);
    int2 = arr[i + 1];
  }
  return int1;
}

var testDigits = [24, 4, 12];
multipleGcd(testDigits);

