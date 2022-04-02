// ให้เขียนฟังก์ชัน checkEmptyObj(obj) เพื่อเช็คว่า obj เป็น object ว่างหรือไม่

let checkEmptyObj = (obj) => {
  if (Object.entries(obj).length === 0) console.log("Empty");
  else console.log("not empty");
};
checkEmptyObj({});
checkEmptyObj({ name: "luffy", age: 21 });
