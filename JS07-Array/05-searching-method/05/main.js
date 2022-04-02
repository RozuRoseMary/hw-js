// จงหา element ตัวแรก ใน inventory ที่มี name เท่ากับ cherries

const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];
// expected result: { name: 'cherries', quantity: 5 }

// let findName = inventory.filter((el, i) => {
//   if (el.name === "cherries") {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(findName);

// s o l u t i o n
const result = inventory.find((el) => el.name === "cherries");
console.log(result);
