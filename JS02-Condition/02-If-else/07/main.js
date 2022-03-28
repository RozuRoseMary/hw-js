// - จงเขียนโค้ดเพื่อรับ input เข้ามา 2 ค่า คือ username และ password
// - หาก username หรือ password เป็นค่าว่างให้ โชว์ข้อความ “username is required” หรือ “password is required”
// - หาก username = “admin” และ password = “1234” หรือ username = “john” และ password = “qwerty” ให้โชว์ข้อความ “Hello” ตามด้วยชื่อ username
// - หาก username และ password ไม่ตรงตามเงื่อนไขที่กล่าวมาให้ โชว์ข้อความ “invalid username or password”

//solution
const username = prompt("Input username");

if (isInvalidInput(username)) {
  alert("username is required");
} else {
  const password = prompt("Input password");
  if (isInvalidInput(password)) {
    alert("password is required");
  } else {
    if (username === "admin" && password === "1234") {
      alert(`Hello ${username}`);
    } else if (username === "john" && password === "qwerty") {
      alert(`Hello ${username}`);
    } else {
      alert("Invalid username or password");
    }
  }
}
function isInvalidInput(value) {
  return value === null || value.trim() === "";
}

// const username = prompt("Input username");
// const password = prompt("Input password");

// if (username == "" || username == null) {
//   alert("username is required");
// } else if (password == "" || password == null) {
//
// } else if (username != [0 - 9] || password != [a - z0 - 9]) {
//   alert("Invalid username or password");
// } else if (username.length > 0 && password.length > 0) {
//   alert(`Hello, ${username}`);
// }
