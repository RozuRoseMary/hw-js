/*
- ให้เขียนโค้ดเพื่อรับ input มาเป็นตัวเลข
- โดยให้รับมาเรื่อยๆ จนกว่า ผู้ใช้จะพิมพ์ 0, เลขลบ, String ว่าง, กด cancel หรือ esc จึงหยุดรับตัวเลข
- ให้หาผลรวมและค่าเฉลี่ยของเลขที่ผู้ใช้งานกรอกเข้ามา
*/
let inputNumber = prompt("Please input one number");
let sum = 0;
let count = 0;

// while (inputNumber != 0 || inputNumber != null || inputNumber.trim() != "") {
//   inputNumber = +prompt("Please input one number");
//   inputNumber += inputNumber;
//   sum += inputNumber;
//   count++;
// }

while (
  !(inputNumber === "0" || inputNumber === null || inputNumber.trim() === "")
) {
  inputNumber = prompt("Please input one number");
  sum += inputNumber;
  count++;
}

alert(`input: ${inputNumber}, sum: ${sum} time: ${count} avg: ${sum / count}`);
