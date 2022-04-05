// จงเขียนฟังก์ชัน mergeObjects โดยพารามิเตอร์ของฟังก์ชันสามารถรับ Object ได้ไม่จำกัด และให้ return ค่าเป็น Object ที่เกิดจาก Object ในพารามิเตอร์มา merge กัน (ในกรณีที่ Object ในพารามิเตอร์มี key ซ้ำกันให้ยึดค่าพารามิเตอร์ตัวที่มาก่อนเป็นหลัก)

// let mergeObjects = ({ ...obj }) => {
//   let object = {};
//   for (let key of obj) {
//     obj.key =
//   }
//   let merge = { ...obj };
//   return merge;
// };

let mergeObjects = (...obj) => {
  //   obj.forEach((el, idx) => {
  //     // console.log(element);
  //     console.log(idx);
  //   });

  for (let i = obj.length - 1; i >= 0; i--) {
    console.log({ ...obj[i] });
  }
};

let obj1 = {
  name: "Luffy",
  age: 23,
};

let obj2 = {
  lastName: "Monkey D.",
  age: 21,
};

let obj3 = {
  name: "Ace",
  lastName: "Protogus D.",
};

// console.log(mergeObjects(...obj1, ...obj2));
console.log(mergeObjects(obj1, obj2));
console.log(mergeObjects(obj1, obj2, obj3));
