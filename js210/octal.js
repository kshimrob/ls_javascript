// break string into individual characters => new array
// go over each character and multiply it by 10 ^ length - 1 => return new array (map)
// get the sum of all numbers => return single value (reduce)

function octalToDecimal(string) {
  var i = array.length;

  var array = string.split('').map(function (number){
    i -= 1;
    return Number(number) * (8 ** i);
  });

  return array.reduce(function (result, currentNum){
    return result + currentNum;
  });
}

octalToDecimal('1');

// Alternative solution

function octalToDecimal(numberString) {
  return numberString.split('').reduce(function (sum, digitChar, index) {
    return sum + Number(digitChar) * Math.pow(8, numberString.length - index - 1);
  }, 0);
}