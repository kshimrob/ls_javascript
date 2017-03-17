function gradeAvg(gr1,gr2,gr3) {
  var avg = (Number(gr1) + Number(gr2) + Number(gr3))/3;
  var finalGr;
  var article;

  if (avg >= 90) {
    finalGr = 'A';
    article = ' an '
  } else if (avg >= 70) {
    finalGr = 'B';
    article = ' a '
  } else if (avg >= 50) {
    finalGr = 'C';
    article = ' a '
  } else {
    finalGr = 'F';
    article = ' an '
  }

  console.log("Based on your 3 scores your final grade is" + article + finalGr);
}

var score1 = prompt("Please enter first score:");
var score2 = prompt("Please enter second score:");
var score3 = prompt("Please enter third score:");

gradeAvg(score1, score2, score3);

// INFINITE ARGUMENTS VERSION //



function avg(grades) {
  var total = 0;
  for (var i = 0; i < grades.length; i++) {
    total += grades[i];
  }
  return (total/grades.length);
}

var enteredGrades = [];
var finalGrade;

while (true) {
  var input = prompt("Please enter a grade. Type 'calculate' to determine your final grade.");
  if (input === "calculate") {break}
  enteredGrades.push(parseInt(input));
}

var gradeAvg = avg(enteredGrades);

if (gradeAvg >= 90) {
  finalGrade = 'A';
} else if (gradeAvg >= 70) {
  finalGrade = 'B';
} else if (gradeAvg >= 50) {
  finalGrade = 'C';
} else {
  finalGrade = 'F';
}

console.log("Your final grade in this course is " + finalGrade + ".");

