// จงหาผลคูณของ element ใน nums

const nums = [-3, 2, 11, -7, 4, 6];

let result = nums.reduce((acc, item) => acc * item, 1);
console.log(result);
