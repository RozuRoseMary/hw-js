let a = undefined;
let b = 2;
let c = a++;

let d = String(a);
let e = "" + b;
let f = `${c}`;

console.log(d); //NaN   bc' ไม่ใช่ string
console.log(e); //2     bc' แปลงจาก number เป็น string ได้
console.log(f); //NaN   bc' ไม่ใช่ string
