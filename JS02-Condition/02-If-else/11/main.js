// - จงเขียนโค้ดเพื่อรับคะแนนมาคำนวณเกรดในรูปแบบ Ternary Operator
// - ถ้าคะแนน มากกว่าเท่ากับ 80 ได้ A
// - ถ้าคะแนน อยู่ระหว่าง 70 - 79 ได้ B
// - ถ้าคะแนน อยู่ระหว่าง 60 - 69 ได้ C
// - ถ้าคะแนน อยู่ระหว่าง 50 - 59 ได้ D
// - ถ้าคะแนน น้อยกว่า 50 ได้ F
function isInvalidNumber(number) {
  return number === null || number.trim() === "";
}

let inputGrade = prompt("Input Grade.");

let msg =
  inputGrade == isInvalidNumber(inputGrade)
    ? "Invalid number"
    : inputGrade >= 80
    ? "A"
    : inputGrade >= 70
    ? "B"
    : inputGrade >= 60
    ? "C"
    : inputGrade >= 50
    ? "D"
    : inputGrade > 0
    ? "F"
    : "Invalid number";

alert(msg);
