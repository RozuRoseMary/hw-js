// จงหาผลรวมของเลขที่มีค่าน้อยกว่า 40 ที่อยู่ในตัวแปร str

let str = "31 45 12 67 34 86 23 37 19 41";
let splitted = str.split(" ");
let result = splitted.reduce((acc, el) => {
  if (+el < 40) return acc + +el;
  return acc + 0;
}, 0);
console.log(result); //156
