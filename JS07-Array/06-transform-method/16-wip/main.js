// จง Group คนที่มีเพศเดียวกันเข้าด้วยกัน

const persons = [
  { name: "John", sex: "M" },
  { name: "Jody", sex: "M" },
  { name: "Susan", sex: "F" },
  { name: "Kate", sex: "F" },
  { name: "Sid", sex: "M" },
];
// expexted result: { M: ['John', 'Jody', 'Sid'], F: ['Susan', 'Kate'] }

let result = persons.reduce((acc, item) => {
  if (result[item.sex])
}

// let result = persons.map((item) => {
//   let container = {};
//   container[item.sex] = 1;
//   return container;
// });
// console.log(result);

// let result = persons.reduce((acc, item) => {
//   let key = item.sex;
//   if (key in acc) {
//     // acc[key]++;
//     item.name;
//   }
//   return acc;
// }, {});
// console.log(result);
