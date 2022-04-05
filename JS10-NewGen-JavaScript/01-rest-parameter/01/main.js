// จงเขียนฟังก์ชันหาค่าผลคูณของตัวเลข โดยพารามิเตอร์ของฟังก์ชันสามารถรับตัวเลขได้ไม่จำกัด
let multiNum = (...numbers) => {
  let result = 1;
  for (let number of numbers) result *= number;
  console.log(result);
};
multiNum(1, 5, 2);
multiNum(5, 2, 2);
