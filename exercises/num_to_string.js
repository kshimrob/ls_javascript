// Create an array...
// Iterate over each digit in the number
// Find the remainder of % 10, and get the remainder as well as the new number (divmod?)
// convert and push to string!

numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

function integerToString(number) {
  var dividingNum = number;
  var remainder;
  var stringArray = [];

  while (dividingNum !== 0) {
    remainder = dividingNum % 10;
    dividingNum = Math.trunc(dividingNum / 10);

    stringArray.push(numbers[remainder]);
  }

  return stringArray.join("");
}

integerToString(1234);