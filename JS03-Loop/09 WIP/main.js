/*
ให้เขียนเกมส์ทายตัวเลขสำหรับผู้เล่นสองคน โดยมีเงื่อนไขดังนี้

- ให้ใช้คำสั่ง prompt เพื่อให้ผู้เล่นคนแรกพิมพ์เลข ที่อยู่ระหว่าง 1 ถึง 99 โดยไม่ให้ผู้เล่นคนที่สองรู้ว่าตัวเลขเป็นอะไร
- ให้ใช้คำสั่ง prompt เพื่อให้ผู้เล่นคนที่สองทายเลข จนกว่าจะถูก
- ถ้าไม่ถูก จะต้องบอกด้วยว่าเลขที่ผู้เล่นคนที่สองพิมพ์เข้ามา มากกว่า หรือ น้อยกว่าคำตอบนั้น
- หากพิมพ์ถูกให้แสดงคำว่าถูกต้อง และให้แสดงจำนวนครั้งที่ทาย

*/

let isInvalidNumber = (personInput) =>
  personInput === null || personInput.trim() === "";

let firstPerson = prompt("Enter number");
let secondPerson = prompt("guess number");
let count = 0;

while (
  !(
    inputNumber === null ||
    inputNumber.trim() === "" ||
    firstPerson === secondPerson
  )
) {
  if (firstPerson !== secondPerson) {
    alert("Wrong");
    secondPerson = prompt("try again");
    count++;
  }
}
alert(`Correct: ${firstPerson}, time: ${count}`);

// while (firstPerson !== secondPerson) {
//   if (isInvalidNumber(firstPerson) || isInvalidNumber(secondPerson)) {
//     alert("Invalid number");
//   } else if (firstPerson !== secondPerson) {
//     alert("Wrong");
//     secondPerson = prompt("try again");
//     count++;
//   }
// }
// alert(`Correct: ${firstPerson}, time: ${count}`);
