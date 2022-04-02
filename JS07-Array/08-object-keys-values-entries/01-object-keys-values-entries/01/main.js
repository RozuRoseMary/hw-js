// ให้คำนวณผลรวมของ salaries ใน object โดยใช้ Object.keys, Object.values และ Object.entries

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let result = Object.values(salaries).reduce((acc, salary) => acc + salary, 0);
console.log(result);
