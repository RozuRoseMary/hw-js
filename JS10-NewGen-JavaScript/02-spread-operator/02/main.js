// จงเขียนฟังก์ชันที่ใช้คุณสมบัติของ Spread operator เพื่อรับค่า array1
// แล้วคืนค่าเป็น array ที่มีการเปลี่ยนแปลงค่าของ index ที่ 3 ให้มีค่าเท่ากับ ค่าเดิมยกกำลัง 2 โดยที่ array1 ไม่เกิดการเปลี่ยนแปลง

// console.log(array1);

let mulArr = (...arr) => {
  let clone = [...arr];
  clone[3] = clone[3] ** 2;
  console.log(clone);
};
mulArr(5, 6, 7, 8);
