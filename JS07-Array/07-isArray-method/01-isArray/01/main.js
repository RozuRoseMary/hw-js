// จงเขียนฟังก์ชัน isArray(input) เพื่อตรวจสอบว่า input เป็น Array หรือไม่

let isArray = (input) => console.log(Array.isArray(input));

isArray([1, 2, 3]);
isArray({ name: "luffy", is: "Prirate" });
isArray(1);
