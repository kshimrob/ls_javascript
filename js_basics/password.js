var password = "password";

function enterPw() {
  for (var i = 0; i < 3; i++) {
    var input = prompt("Please enter password:");
    if (input === password) {
      console.log("You have succesfully logged in.");
      return;
    }
  }
  console.log("You have been denied access.");
}

enterPw();

