// จงหา array ของตำแหน่ง (index) ของ 'a' ใน alphabets

const alphabets = ["a", "b", "a", "c", "a", "d"];
// expected result: [0, 2, 4]

let arr = [];
// let finedIndex = alphabets.filter((el, index) => {
//   if (el.includes("a") === true) {
//     arr.push(index);
//   } else {
//     return false;
//   }
// });
// console.log(arr);

// solution forEach
let forEachResult = [];
alphabets.forEach((el, idx) => {
  if (el === "a") forEachResult.push(idx);
});
