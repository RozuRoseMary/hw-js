// จงกระจาย element ที่ซ้อนกันอยู่ภายใน array ให้กระจายออกมาที่ element ชั้นนอกสุด

let flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
];
// expected result: [0, 1, 2, 3, 4, 5]

let result = flattened.map((el, index) => {
  // for (let i = 0; i <= el.length; i++) {
  //   return el[i];
  // }
  // return;
});

// let result = [].concat([], flattened);
console.log(result);
