// ให้คำนวณผลรวมของ salaries ใน object ที่มี property แบบด้านล่าง
// ถ้า object เป็น object ว่าง ให้ return ค่าผลรวมเป็น 0

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
let empty = {};

// My answer ////////////////////////////////////////
function sumSalaries(obj) {
  if (Object.keys(obj).length === 0) {
    return 0;
  } else {
    console.log(Object.values(obj).reduce((a, b) => a + b));
  }
}
sumSalaries(salaries);
sumSalaries(empty);

// solution //////////////////////////////////////
let calSalaries = (obj1) => {
  let sum = 0;
  for (let key in obj1) {
    sum += obj1[key];
  }
  console.log("solution: " + sum);
};
calSalaries(salaries);
calSalaries(empty);
