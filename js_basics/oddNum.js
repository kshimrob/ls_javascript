var integer = prompt("Please enter a positive integer.");
if (Number(integer) >= 1) {
  for (var i = 1; i <= integer; i++) {
    if (i%2 == 0) continue;
    console.log(i);
  }
} else {
  alert("Please enter a number that is positive!")
}

var integer = prompt("Please enter a positive integer.");
if (Number(integer) >= 1) {
  if (integer%2 == 0) {integer--}
  for (var i = 1; i <= integer; i+=2) {
    console.log(i);
  }
} else {
  alert("Please enter a number that is positive!")
}