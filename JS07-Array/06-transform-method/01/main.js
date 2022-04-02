// ให้สร้าง array result จาก array ที่กำหนด โดยใช้ arr.map(fn)

// const array = [1, 2, 30, 400];
// let mulTwo = array.map((el) => el * 2);
// console.log(mulTwo); // result: [2, 4, 60, 800]

// const array = [1, 2, 3, 4];
// let turnToString = array.map((el) => String(el));
// console.log(turnToString);
// result: ["1", "2", "3", "4"]

// const array = [1, "1", 2, {}];
// let findType = array.map((el) => typeof el);
// console.log(findType);
// result: ["number", "string", "number", "object"]

// const array = ["apple", "banana", "orange"];
// let bigLetter = array.map((el) => el.toUpperCase());
// console.log(bigLetter);
// result: ["APPLE", "BANANA", "ORANGE"]

// const array = [1, 3, 4, 5, 6, 7, 8];
// let findOddEven = array.map((el) => {
//   if (el % 2 === 0) {
//     return (el = "even");
//   } else {
//     return (el = "odd");
//   }
// });
// console.log(findOddEven);
// result: ["odd", "odd", "even", "odd", "even", "odd", "even"]

// const array = [1, -3, 2, 8, -4, 5];
// let turnNegative = array.map((el) => {
//   if (el <= 0) {
//     return el * -1;
//   }
//   return el;
// });
// console.log(turnNegative);
// result: [1, 3, 2, 8, 4, 5]

// const array = [100, 200.25, 300.84, 400.3];
// let changeNumber = array.map((el) => "" + el.toFixed(2));
// console.log(changeNumber);
// result: ["100.00", "200.25", "300.84", "400.30"]

// const array = [0, 5, 10, 7, 6, 5, 0];
// let month = [
//   "Jan",
//   "Feb",
//   "Mar",
//   "Apr",
//   "May",
//   "Jun",
//   "Jul",
//   "Aug",
//   "Sep",
//   "Oct",
//   "Nov",
//   "Dec",
// ];
// let convertMonth = array.map((el, index) => {
//   return (el = month[el]);
// });
// console.log(convertMonth);
// result: ["Jan", "Jun", "Nov", "Aug", "Jul", "Jun", "Jan"]

// const array = [1, 16, 81, 256, 625, 1296];
// let mulFour = array.map((el) => el ** (1 / 4));
// console.log(mulFour);
// result: [1, 2, 3, 4, 5, 6]

// const array = [
//   { name: "apple", age: 14 },
//   { name: "banana", age: 18 },
//   { name: "watermelon", age: 32 },
// ];
// let keyName = array.map((el) => el.name);
// console.log(keyName);
// result: ["apple", "banana", "watermelon"]

// const array = [
//   { name: "apple", age: 14 },
//   { name: "banana", age: 18 },
//   { name: "watermelon", age: 32 },
// ];
// let keyAge = array.map((el) => el.age);
// console.log(keyAge);
// result: [14, 18, 32]

// const array = [
//   { name: "apple", surname: "London" },
//   { name: "banana", surname: "Bangkok" },
//   { name: "watermelon", surname: "Singapore" },
// ];
// let valueObj = array.map((el) => {
//   return `${el.name} ${el.surname}`;
// });
// console.log(valueObj);
// result: ["apple London", "banana Bangkok", "watermelon Singapore"]

// const array = [
//   { name: "apple", birth: "2000-01-01" },
//   { name: "banana", birth: "1990-10-01" },
//   { name: "watermelon", birth: "1985-12-01" },
// ];
// let user = array.map((el, index, arr) => {
//   let year = +el.birth.split("-")[0];
//   let findAge = 2021 - year;
//   return (arr[index].age = findAge);
// });
// console.log(array);
// result: [
//   { name: "apple", birth: "2000-01-01", age: 21 },
//   { name: "banana", birth: "1990-10-01", age: 31 },
//   { name: "watermelon", birth: "1985-12-01", age: 36 },
// ]

const array = [
  { name: "apple", birth: "2000-01-01" },
  { name: "banana", birth: "1990-10-10" },
  { name: "watermelon", birth: "1985-12-30" },
];
let month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
// let findMonth array.map(el => {
//   month[+el.birth.split("-")[1]]
// })

let result = array.map((el) => {
  let birthDate = el.birth.split("-")[2];
  let birthMonth = month[+el.birth.split("-")[1] - 1];
  // let birthMonth = +el.birth.split("-")[1];
  // birthMonth = month[el];
  let birthYear = el.birth.split("-")[0];
  return `<tr><td>${el.name}</td><td>${birthDate} ${birthMonth} ${birthYear}</td></tr>`;
  // return ;
});
console.log(result);
// result: [
//     "<tr><td>apple</td><td>01 jan 2000</td></tr>",
//     "<tr><td>banana</td><td>10 oct 1990</td></tr>",
//     "<tr><td>watermelon</td><td>30 dec 1985</td></tr>",
// ]
