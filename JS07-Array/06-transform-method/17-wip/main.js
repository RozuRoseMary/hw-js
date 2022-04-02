// จงหาผลรวมของเลขที่มีค่าน้อยกว่า 40 ที่อยู่ในตัวแปร str

let str = "31 45 12 67 34 86 23 37 19 41";
let splitted = str.split(" ");
let result = splitted.reduce((acc, el, index, array) => {
  let newArr = [];
  // return el;
  // return array;
  if (el < 40) return array.split();
  // return +acc + +el;
  // else return false;
}, 0);
console.log(splitted);
// console.log(el);
console.log(result);
