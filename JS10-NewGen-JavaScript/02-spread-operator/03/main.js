// จงเขียนฟังก์ชันที่รับค่า ชื่อ นามสกุล และ งานอดิเรก ซึ่งงานอดิเรกอาจมี 1 หรือมากกว่า 1 ก็ได้ แล้วคืนค่าเป็น ชื่อ, นามสกุล, งานอดิเรก และจำนวนงานอดิเรก โดยใช้คุณสมบัติของ rest operator

let user = (firstName, lastName, ...habit) => {
  let count = 0;
  console.log(firstName);
  console.log(lastName);
  // console.log(...(habit + ", "));
  console.log("habit", habit.length + ":", habit);
  // for (let i = 0; i <= (...habit).length; i++)
  // console.log(...habit.length);
};
user("Piyawan", "Yosathorn", "Mobile Game", "Reading Comics");
