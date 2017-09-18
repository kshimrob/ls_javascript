// get the sign in front of the number
// get the absolute value of the number
// then apply the integerToString function
// then make negative if negative boolean is set equal to true
// USE CASE

numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

function integerToString(number) {
  var dividingNum = number;
  var remainder;
  var stringArray = [];

  while (dividingNum !== 0) {
    remainder = dividingNum % 10;
    dividingNum = Math.trunc(dividingNum / 10);

    stringArray.unshift(numbers[remainder]);
  }

  return stringArray.join("");
}


function signedIntegerToString(number) {
  switch (Math.sign(number)) {
    case -1:
      return "-" + integerToString(Math.abs(number));
    case 1:
      return "+" + integerToString(Math.abs(number));
    default:
      return integerToString(number);
  }
}

signedIntegerToString(-4321);