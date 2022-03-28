// function max(a, b, c, d) {
//   if (a === NaN) {
//     return NaN;
//   } else if (a) {
//     return a;
//   } else if ((a, b)) {
//     return Math.max(a, b);
//   } else if ((a, b, c)) {
//     return Math.max(a, b, c);
//   } else if ((a, b, c, d)) {
//     return Math.max(a, b, c, d);
//   }
// }

//solution
function isValidNumber(number) {
  (number === null || String(number).trim() === '' ||isNaN(number) || typeof number ==='boolean') return false
}

function max(a,b,c,d) { //Math.max()
  if (a === undefined) return undefined;
  if (b === undefined) return Math.max(a);
  else {
    if (c === undefined) return Math.max(a,b); 
    else {
      if (d === undefined) return Map.max(a,b,c);
      else return Math.max (a,b,c,d);
    } 
  }

  // if (a === undefined) return undefined;
  // if (b===undefined) {
  //   if (isValidNumber(a)) return a;
  //   else return NaN
  // } else {
  //   if (isValidNumber(a) && isValidNumber(b)) {
  //     return a> b? a: b;
  //   } else return NaN;
  // }
}

console.log(max()); //undefined
console.log(max(2)); //2
console.log(max(3, 1)); //3
console.log(max(7, 3, 9, 2)); //9
