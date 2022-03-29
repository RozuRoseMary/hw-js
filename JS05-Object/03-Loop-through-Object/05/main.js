// ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง
// โดยให้ key เป็นชื่อของผลไม้ และ value เป็นจำนวนของผลไม้ (number)
// โดยถ้า ผลไม้ชนิดไหนที่มีมากกว่า 1 ผล ให้เติม s ไปหลัง key นั้นด้วย

//solution
let result = {};

while (1) {
  let fruit = prompt("Enter fruit");
  if (fruit === "stop") break;
  let value = prompt("Enter value");
  if (value === "stop") break;
  if (value > 1) {
    result[fruit + "s"] = value;
  } else {
    result[fruit] = value;
  }
}
console.log(result);
