// ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง จนกว่าจะเจอคำว่า stop ถึงหยุด
// และให้นำค่าเหล่านั้นมาสร้าง Object หลังจากนั้น log object นั้นออกมา

// solution ///////////////////////
// let key = prompt("Enter key");
// if (key !== "stop") {
//   let value = prompt("Enter value");
//   if (value !== "stop") {
//     while (key !== "stop") {}
//   }
// }

let result = {};

while (1) {
  let key = prompt("Enter key");
  if (key === "stop") break;
  let value = prompt("Enter value");
  if (value === "stop") break;
  result[key] = value;
}
console.log(result);
