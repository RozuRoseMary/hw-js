// จงหา element ตัวแรก ใน nums ที่มีค่าน้อยกว่า 0

const nums = [7, 9, -5, -1, 0, 3];
// expexted result: -5
let filterd = nums.filter((el) => {
  if (el < 0) {
    return true;
  } else {
    return false;
  }
});
console.log(filterd);
