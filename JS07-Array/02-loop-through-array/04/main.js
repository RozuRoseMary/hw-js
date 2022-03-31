// จงหาผลรวมของ element ใน array โดยใช้ forEach

const array = [29, 17, 13, 47, 23, 31];
// let sum = 0;
// array.forEach((el) => (sum += el));
// console.log(sum);

let sumArray = (arr) => {
  let sum = 0;
  arr.forEach((el) => (sum += el));
  console.log(sum);
};

sumArray(array);
