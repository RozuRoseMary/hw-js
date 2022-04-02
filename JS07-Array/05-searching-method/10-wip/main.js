// <!-- จงเขียนฟังก์ชัน filterRange(arr, a, b) เพื่อ return array ที่ประกอบด้วย element ของ arr ที่มีค่าอยู่ระหว่าง a กับ b -->

// let filterRange = (arr, a, b) => {
//   let filtered = arr.filter((el, index, array) => {
//     el === a;
//     // a = el
//     // b = el
//     // arr.slice()
//     // console.log()
//   });
// };
// filterRange([1, 2, 3, 4, 5], 2, 3);

// solution
const filterRange = function (arr, a, b) {
  return arr.filter((el) => el >= a && el <= b);
};

const result = filterRange([3, 9, 2, 8, 4], 3, 6);
console.log(result);
