// ผลลัพธ์ในบรรทัด * มีค่าเป็นอะไรและเพราะอะไร;

const arr = [1, 2, 4];
const newArr = arr;

arr[0] = 3;
console.log(newArr[0]); // *
// 3
// เพราะ arr element ถูกเปลี่ยนค่า ทำให้ newArr ที่อ้างอิงกับ arr ที่ index 0 มีค่าเท่ากับ 3
