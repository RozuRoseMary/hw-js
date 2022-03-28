function isPrime(num) {
  for (let i = 0; i < num; i++) {
    if (num % i === 0) return false;
  }
  console.log(num);
}

isPrime(1);
isPrime(2);
isPrime(3);
isPrime(4);
isPrime(5);
