function isPrime(number){
  if (number === 0 || number === 1) {
    return false;
  } else {
    for (var i = 2; i < number; i++){
      if (number%i === 0) {
        return false;
      }
    }
    return true;
  }
}

function goldbach(num) {
  if (num < 4 || num % 2 === 1) {
    console.log(null);
  }

  var found;

  for (var i = 2; i < num/2; i++){
    if (isPrime(i) && isPrime(num - i)) {
      console.log(i + " " + (num - i));
      found = true;
    }
  }

  if (!found) {
    console.log(null);
  }
}

goldbach(12);
goldbach(100);