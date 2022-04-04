// จงสร้างฟังก์ชัน clone(arr) เพื่อ return ค่า Array ที่มี element เหมือน arr ทุกตัว

let clone = (arr) => {
  let cloneArr = arr;
  console.log(cloneArr);
};
let Array = [1, 2, 3, 4, 5];

clone(Array);

//solution
// return arr.slice(0);
return [...arr];
