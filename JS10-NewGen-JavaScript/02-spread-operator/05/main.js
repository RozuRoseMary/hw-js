// จงเขียนฟังก์ชัน removeRandom โดยรับพารามิเตอร์มาเป็น Array และ return ค่าเป็น Array ที่มี element ถูกลบออกไปหนึ่งตัวโดยตำแหน่งที่ลบให้เกิดจากการสุ่ม

let removeRandom = (...arr) => {
  let randomNum = Math.floor(Math.random() * arr.length);
  // delete arr[randomNum];
  arr.splice(randomNum, 1);
  return arr;
};

console.log(removeRandom(5, 6, 7, 8, 9));
