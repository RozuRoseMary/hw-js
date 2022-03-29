// ให้สร้าง object ชื่อ user
// - เพิ่ม property ชื่อ name ให้มีค่าเท่ากับ John
// - เพิ่ม property ชื่อ surname ให้มีค่าเท่ากับ Doe
// - Update property name ให้มีค่าเป็น Matt
// - ลบ property name

const user = {
  name: "John",
  surname: "Doe",
};

let add = (user.name = "Matt");
let del = delete user.name;

console.log(add); //Matt
console.log(user); //{ surname: 'Doe' }
