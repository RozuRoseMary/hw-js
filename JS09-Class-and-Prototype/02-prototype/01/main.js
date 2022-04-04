// ให้เพิ่ม Method max และ sum เข้าไปใน Prototype ของ Array โดย
// - max ให้ return ค่ามากสุดของตัวเลขใน Array
// - sum ให้ return ผลรวมของตัวเลขใน Array

let arr = [5, 3, 7, 1];

Array.prototype.max = function () {
  console.log(this.sort((a, b) => a - b)[this.length - 1]);
};
arr.max();

Array.prototype.sum = function () {
  console.log(this.reduce((acc, el) => acc + el, 0));
};
arr.sum();
