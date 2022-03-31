// - ให้ใช้ฟังก์ชัน prompt เพื่อรับค่าตัวเลข แล้วเก็บไว้ในตัวแปร Array
// - รับค่าตัวเลขไปเรื่อยๆจนกว่าผู้ใช้จะพิมพ์ข้อความที่ไม่ใช่ตัวเลขหรือกด cancel
// - ให้หาผลรวมของตัวเลขที่เก็บไว้ในตัวแปร Array

/* S O L U T I O N */
const isValidNumber = (number) => {
  if (number === null || number.trim() === "" || isNaN(number)) return false;
  return true;
};

const result = [];
let sum = 0;
while (1) {
  const input = prompt("Enter number");
  //null -> cancel
  if (!isValidNumber(input)) {
    break;
  }
  result[result.length] = +input;
  // sum += +input;
}
console.log(result);

for (let el of result) {
  sum += el;
}
console.log(sum);

// let inputNumber = +prompt("Enter number.");
// let sum = 0;
// let arr = [];

// for (let i = 0; i < inputNumber.length; i++) {
//   if (
//     !(inputNumber === null) ||
//     inputNumber.trim() === "" ||
//     isNaN(inputNumber)
//   ) {
//     inputNumber = +prompt("Enter number.");
//     arr[i] = inputNumber;
//     console.log(arr[i]);
//   } else {
//     sum += arr[i];
//     false;
//   }
// }
// console.log(sum);
