// - ให้เขียนฟังก์ชัน squareArr(arr) เพื่อคืนค่า Array ที่มี element เป็นเลขยกกำลังสองของแต่ละ element ใน arr
// - ตัวอย่างผลลัพธ์

// ```js
// const arr = [2, 3, 5, 7, 11];
// squareArr(arr); // [4, 9, 25, 49, 121]
// ```

let squareArr = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] ** 2;
  }
  console.log(arr);
};

squareArr([2, 3, 5, 7, 11]);
