// ให้สร้างฟังก์ชันเพื่อตรวจสอบ object ว่าเป็น object ว่างหรือไม่
// ถ้า object มี property อย่างน้อยหนึ่งแสดงว่าไม่ใช่ object ว่าง

let empty = {};
let obj = {
  name: "Ace",
  haveBrother: "2",
};

// function checkObject(obj) {
//   if (Object.keys(obj).length === 0) console.log(`empty`);
//   else {
//     console.log(`not empty`);
//   }
// }
// checkObject(empty);
// checkObject(obj);

// solution /////////////
const isEmptyObj = (obj) => {
  for (let key in obj) {
    console.log(false);
  }
  console.log(true);
};
isEmptyObj(empty);
isEmptyObj(obj);
