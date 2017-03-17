var apples = 3;
var bananas = 1; 

var areEqual = apples === bananas;

var eitherOr = apples || bananas;
console.log(eitherOr);

if (areEqual) {
  console.log("They are equal!");
} else if (apples == bananas) {
  console.log("Same same but different");
} else {
  console.log("BUTTTSSS");
}

var lastName = "Robinson";

lastName === "Robinson"? console.log("SAME") : console.log("NO SAME");