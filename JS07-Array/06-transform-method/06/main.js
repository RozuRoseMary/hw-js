// - จงเขียนฟังก์ชัน copySorted(arr) เพื่อ return array ที่เรียงข้อมูลใน arr จากน้อยไปหามาก โดยที่ arr ต้องมีค่าเหมือนเดิม
// - ตัวอย่างผลลัพธ์

let copySorted = (array) => {
  let cloneArray = array.slice(0);
  let sorting = cloneArray.sort((a, b) => {
    if (a > b) return 1;
    return -1;
  });
  return sorting;
};

let arr = ["React", "Vue", "Angular"];
let sorted = copySorted(arr);

console.log(arr); // React, Vue, Angular (no changes)
console.log(sorted); // Angular, React, Vue
