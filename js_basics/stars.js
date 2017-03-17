/* 

Input:

- takes any positive integer as an argument
- validates against negatives, floats, zero? what should that return?
- one long string with newline character or just individual lines?

Output:

- creates n number of rows
- first row starts with 1 and n-1 stars
- each row adds the next digit (counting up) while the number of stars decreases by 1
- last row has no stars and is only digits

random thought: can use the stars as the iterator

Test cases:

generatePattern(7)
generatePattern(1)
generatePattern(0)
generatePattern(20)
generatePattern(2)

*/

function generatePattern(num) {
  for (var i = 1; i <= num; i++) {
    var digits = 1;
    var stars;

    for (var j = 2; j < (i + 1); j++) {
      digits += j.toString();
    }

    if (i < 9 && num >= 10) {
      stars = "*".repeat(num - (6 + i)) + "**".repeat(num - 9);
    } else if (num >= 10) {
      stars = "**".repeat(num - i);
    } else {
      stars = "*".repeat(num - i);
    }

    console.log(digits + stars);
  }
}

generatePattern(7)
generatePattern(1)
generatePattern(2)
generatePattern(15)

12345678910**********
0 single
5 double

1********
8 single
6 double

12*********
7 single
6 double

123
6 single
6 double
