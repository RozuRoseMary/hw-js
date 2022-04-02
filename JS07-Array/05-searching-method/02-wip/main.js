// จงหา array ของตำแหน่ง (index) ของ 'a' ใน alphabets

const alphabets = ["a", "b", "a", "c", "a", "d"];
// expected result: [0, 2, 4]

let arr = [];

let finedIndex = alphabets.filter((el, index, array) => {
  if (el.includes("a") === true) {
    arr.push(index);
  } else {
    return false;
  }
});
console.log(arr);

// console.log(arr[index]);

// for (let i = 0; i < alphabets.length; i++) {
//   alphabets.indexOf("a");
// }

// let filtered = alphabets.filter((el, index) => {
//   if (el == "a") {
//     return index;
//   } else {
//     return false;
//   }
// });
// console.log(filtered);
