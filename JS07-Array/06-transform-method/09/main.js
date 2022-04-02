// จงหาค่ามากสุดและน้อยสุดใน arr

let arr = [3.24, 2.78, 3.86, 1.37, 0.52];
let sortArr = arr.sort((a, b) => a - b);
sortArr.splice(1, sortArr.length - 2);
console.log(sortArr);
