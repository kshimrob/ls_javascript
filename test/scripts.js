jQuery(document).ready(function($){
  function isPrime(num) {
    if (num == 0 || num == 1 || num == 2) {
      return false
    }
    
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
          return false;
        }
      return true;
    }
  }
  
  function pVerify()
    {
      var number = $("input[id=number]").val();
      var is_prime = isPrime(number);

        $("#isresult").html(String(is_prime));
    }

  
  function pGenerate() {
    var first = $("input[id=start]").val();
    var last = $("input[id=end]").val();
    var primes = []
    
    for (var i = first; i <= last; i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }
    
    $("#result").html(primes.toString());
  }
});