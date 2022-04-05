// - จงเขียนฟังก์ชัน topSalaries(salaries) เพื่อ return ชื่อคนที่มี salary สูงสุด
// - ถ้า salaries เป็น empty object ให้ return null
// - ถ้ามีคนที่ได้ salary มากสุดให้ return ชื่อคนใดคนหนึ่ง

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

// let { John, Pete, Mary } = salaries;

let topSalaries = (obj) => {
  let resultValue = Object.values(obj).sort((a, b) => b - a)[0];
  let resultKey = Object.keys(obj).find((key) => obj[key] === resultValue);
  console.log(resultKey);
};
topSalaries(salaries);
