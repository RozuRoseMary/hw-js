// ให้เขียนโค้ดเพื่อหาผลรวมของจำนวนเต็มตั้งแต่ 1 ถึง 100 ตามเงื่อนไขดังนี้
// 1 - หาผลรวมตัวเลขทุกตัว
let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum = sum + i;
}
console.log(sum);

// 2 - หาผลรวมเฉพาะเลขคู่ และผลรวมเฉพาะเลขคี่
let evenSum = 0;
for (let j = 0; j <= 100; j++) {
  if (j % 2 == 0) evenSum += j;
}
console.log(evenSum);

let oddSum = 0;
for (let ii = 0; ii <= 100; ii++) {
  if (ii % 2 != 0) oddSum += ii;
}
console.log(oddSum);

// 3 - หาผลรวมของเลขที่หาร 2 ลงตัว ยกกำลังสอง (2^2 + 4^2 + ...) ลบด้วยผลรวมของเลขที่หาร 3 ลงตัว ยกกำลัง 2 (3^2 + 6^2 + ...)
// let sumSum = 0;
let sumE = 0;
for (let jj = 0; jj <= 100; jj++) {
  if (jj % 2 == 0) {
    sumE += jj ** 2;
    console.log(jj ** 2);
  }
}
console.log(`Sum event number: ${sumE}`);

let sumO = 0;
for (let a = 0; a <= 100; a++) {
  if (a % 3 == 0) {
    sumO += a ** 2;
    console.log(a ** 2);
  }
}
console.log(`Sum Odd number: ${sumO}`);

console.log(sumE - sumO);
