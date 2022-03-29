// ให้เขียนฟังก์ชัน multiplyNumeric(obj, num) เพื่อคูณ value ของ object
// คูณเฉพาะ value ที่เป็น number เท่านั้น

// // before
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
  empty: "",
};

// // after call function multiplyNumeric(menu, 3)
// menu = {
//   width: 600,
//   height: 900,
//   title: 'My menu'
// };

// :( my bad answer) ////////////////////////////////
// let multiplyNumeric = (obj, num) => {
//   // console.log(Object.values(obj));
//   let sum = 0;
//   for (let key in obj) {
//     console.log(+obj[key]);
//     sum = obj[key] * num;
//   }
//   console.log("sum :" + sum);
// };

// solution ///////////////////////////////////////
const multiplyNumeric = (obj, num) => {
  const result = {};
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      result[key] = num * obj[key];
    }
  }
  console.log(result);
};

multiplyNumeric(menu, 3); //{main.js:37 {width: 600, height: 900}
multiplyNumeric(menu, 3); //{width: 600, height: 900}
