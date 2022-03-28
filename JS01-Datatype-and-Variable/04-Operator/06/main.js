let a = 1;
let b = 2;

let c = a++; //2x
// c = 1
// a = 2
let d = ++c; //4x
// c = 2
// d = 2 from c = 1
let e = ++d + d++ + d;
//3+3+4 = 10
// d = 4

console.log(c);
console.log(d);
console.log(e);
