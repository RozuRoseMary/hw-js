// - จงเขียนโค้ดเพื่อรับคะแนนมาคำนวณเกรด
// - ถ้าคะแนน มากกว่าเท่ากับ 80 ได้ A
// - ถ้าคะแนน อยู่ระหว่าง 70 - 79 ได้ B
// - ถ้าคะแนน อยู่ระหว่าง 60 - 69 ได้ C
// - ถ้าคะแนน อยู่ระหว่าง 50 - 59 ได้ D
// - ถ้าคะแนน น้อยกว่า 50 ได้ F

// // solution
const input = prompt("Enter score");

if (isInvalidNumber(input)) {
  alert("Invalid number");
} else if (input >= 80) {
  alert("A");
} else if (input >= 70) {
  alert("B");
} else if (input >= 60) {
  alert("C");
} else if (input >= 50) {
  alert("D");
} else if (input >= 0) {
  alert("F");
} else {
  alert("Score must be grater than 0");
}

function isInvalidNumber(value) {
  return value === null || value.trim() === "";
}

// let inputGrade = prompt("Input grade.");

// if (inputGrade >= 80) {
//   alert("A");
// } else if (70 >= inputGrade >= 79) {
//   alert("B");
// } else if (60 >= inputGrade >= 69) {
//   alert("C");
// } else if (50 >= inputGrade >= 59) {
//   alert("D");
// } else {
//   alert("F");
// }
