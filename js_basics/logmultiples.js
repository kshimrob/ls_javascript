function logMultiples(number) {
  for (var i = 100; i > 0; i-=number) {
    if (i%2 === 1){console.log(i)}
  }
}

logMultiples(13);