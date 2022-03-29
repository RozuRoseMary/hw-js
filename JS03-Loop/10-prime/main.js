// ให้เขียนโค้ดเพื่อหาจำนวนเฉพาะตั้งแต่ 1 ถึง 100

// let number = 0;
let count = 0;

// for (let i = 2; i <= 5; i++) {
//   for (let j = 2; j <= 5 && j < i; j++) {
//     if (Number.isInteger(i / j) === true) {
//       // count++;
//       number;
//       break;
//     }
//     console.log(`count: ${number}`);
//   }
// }

// /*solution-1 */
function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
    return true;
  }
}

console.log(isPrime(4));
console.log(isPrime(5));
console.log(isPrime(6));
console.log(isPrime(11));
console.log(isPrime(1111));

// for (let i = 2; i <= 11; i++) {
//   if (isPrime(i)) console.log(i);
// }
