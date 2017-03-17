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

isPrime(13);

