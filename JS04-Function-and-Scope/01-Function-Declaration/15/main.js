function magic() {
  return function (x) {
    return x * 42;
  };
}
const answer = magic();
console.log(answer);
// * return function = การเรียก magic จะไปเรียกฟังชันด้านในอีกทีหนึ่ง

console.log(answer(1337));
// ** 56154 = 1337 *42

console.log(magic(1337)(42));
// *** 1764 = 42 * 42 magic จะไปเรียกฟังชันด้านใน parameter x รับค่า 42
