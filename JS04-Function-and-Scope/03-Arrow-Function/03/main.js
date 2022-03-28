// บรรทัดที่มี \* , \**ให้ผลลัพธ์เป็นอะไร เพราะอะไร

const square = (n) => {
  n ** 2;
};

console.log(square(7)); // * 49 => 7**2

const calcCircleArea = (r) => Math.PI * r ** 2;
console.log(calcCircleArea(3)); // ** 28.274333882308138 => 3.14159 * 3^2 => 3.14159 * 9
