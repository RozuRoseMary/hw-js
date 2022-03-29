// ให้เขียนโค้ดเพื่อรับค่าจากผู้ใช้งาน 3 ค่า และเก็บไว้ในตัวแปร username, email และ password
// ให้สร้าง object user ที่มี property 3 อันคือ username, email และ password โดยให้แต่ละ property มีค่าตามตัวแปรที่รับมา

// let createObj = () => {
//   username = prompt("Enter username");
//   email = prompt("Enter email");
//   password = prompt("Enter password");
// };

// solution ////////////////////
const username = prompt("Enter username");
const email = prompt("Enter email");
const password = prompt("Enter password");

const user = {
  username,
  email,
  password,
};

console.log(user);
