// จงหาค่ามากสุดและน้อยสุดใน arr

let arr = [3.24, 2.78, 3.86, 1.37, 0.52];

let findMinMax = (array) => {
  let sortArr = array.sort((a, b) => a - b);
  sortArr.splice(1, sortArr.length - 2);
  console.log(sortArr);
};
findMinMax(arr);
findMinMax([4, 5, 9, 10]);
