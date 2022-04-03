// ให้สร้าง array result ให้ได้ผลลัพธ์ตามเงื่อนไขที่กำหนด โดยใช้ arr.filter

// const array = [9, 17, 23, 5];
// // ค่าที่มากกว่า 10
// let result = array.filter((el) => {
//   if (el > 10) return true;
//   else return false;
// });
// console.log(result); //[17, 23]

// const array = [1, 2, 3, 4];
// // // ค่าที่เป็นเลขคี่
// let result = array.filter((el) => {
//   if (el % 2 === 0) return false;
//   else return true;
// });
// console.log(result); //[1, 3]

// const array = [1, "1", 2, {}];
// // // ค่าที่ประเภทข้อมูลเป็น Number
// let result = array.filter((el) => {
//   if (el === Number(el)) return true;
//   else return false;
// });
// console.log(result); //[1, 2]

// const array = ["apple", "banana", "orange", "pineapple", "watermeon"];
// // // ค่าที่มีตัวอักษรมากกว่า 6 ตัว
// let result = array.filter((el) => {
//   if (el.length > 6) return true;
//   else return false;
// });
// console.log(result); //['pineapple', 'watermeon']

// const array = [1, -3, 2, 8, -4, 5];
// // // ค่าที่เป็นเลขบวก
// let result = array.filter((el) => {
//   if (el >= 0) return true;
//   else return false;
// });
// console.log(result); //[1, 2, 8, 5]

// const array = [1, 3, 4, 5, 6, 7, 8];
// // // ค่าที่หาร 3 ลงตัว
// let result = array.filter((el) => {
//   if (el % 3 === 0) return true;
//   else return false;
// });
// console.log(result); //[3, 6]

// const array = ["Elephant", "Ant", "Cat", "Eagle", "Zebra"];
// // // ค่าที่ขึ้นต้นด้วยตัว E
// let result = array.filter((el) => {
//   if (el.charAt(0) === "E") return true;
//   else return false;
// });
// console.log(result); //['Elephant', 'Eagle']

// const array = ["APPLE", "oRanGE", "PEACH", "PaPAYA"];
// // // ค่าที่เป็นตัวพิมพ์ใหญ่ทั้งหมด
// let result = array.filter((el) => {
//   if (el === el.toUpperCase()) return true;
//   else return false;
// });
// console.log(result); // ['APPLE', 'PEACH']

// const array = ["Krabi", "Chonburi", "Buriram", "Saraburi", "Phrae"];
// // // ค่าที่มีคำว่า buri เป็นส่วนประกอบโดยไม่สนใจตัวพิมพ์เล็กหรือตัวพิมพ์ใหญ่
// let result = array.filter((el) => {
//   if (el.toLowerCase().includes("buri")) return true;
//   else return false;
// });
// console.log(result);

// const array = [
//   { name: "Ben", age: 14 },
//   { name: "Phil", age: 18 },
//   { name: "John", age: 32 },
//   { name: "Ann", age: 16 },
//   { name: "Paul", age: 24 },
// ];
// // // อายุไม่น้อยกว่า 18
// let result = array.filter((el) => {
//   if (el.age >= 18) return true;
//   else return false;
// });
// console.log(result);
/*
[
  {name: 'Phil', age: 18},
  {name: 'John', age: 32},
  {name: 'Paul', age: 24}
]
*/

// const array = [
//   { id: 1, name: "Pepsi" },
//   { id: 2, name: "Mirinda" },
//   { id: 3, name: "Coke" },
//   { id: 4, name: "Fanta" },
//   { id: 5, name: "Sprite" },
// ];
// // // id ไม่เท่ากับ 4
// let result = array.filter((el) => {
//   if (el.id !== 4) return true;
//   else return false;
// });
// console.log(result);

const array = [
  { name: "John", birth: "2001-07-31" },
  { name: "Jack", birth: "1990-06-24" },
  { name: "Jim", birth: "1984-12-13" },
  { name: "Jeff", birth: "1996-02-05" },
  { name: "Joe", birth: "2002-06-13" },
];
// เกิดเดือน 6
let result = array.filter((el) => {
  let birthMonth = +el.birth.split("-")[1];
  if (birthMonth === 6) return true;
  else return false;
});
console.log(result);
