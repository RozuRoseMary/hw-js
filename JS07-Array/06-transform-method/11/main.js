// จงหาและนับจำนวนตัวอักษรที่ปรากฏใน str

let str = "I live in Thailand";
// expected result: {i: 4, l: 2, v: 1, e:1, n: 2, t: 1, h:1, a:2, d:1}

let result = str.toLowerCase().split(" ").join("").split("");
// let result = str.toLowerCase().split("");
let count = {};

result.forEach((el) => {
  if (count[el]) {
    count[el]++;
  } else {
    count[el] = 1;
  }
});

console.log(count);
