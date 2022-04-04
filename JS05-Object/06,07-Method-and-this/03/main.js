// - ให้สร้าง Object calculator ซึ่งมี 3 method
// - read() ให้รับค่า input 2 ค่า
// - sum() ให้ return ค่าผลบวกของเลขทั้งสอง
// - mul() ให้ return ค่าผลคูณของเลขทั้งสอง

let calculator = {
  firstNum: 0,
  secondNum: 0,
  read() {
    firstNum = +prompt("Enter first number");
    secondNum = +prompt("Enter second number");
  },
  sum() {
    return firstNum + secondNum;
  },
  mul() {
    return firstNum * secondNum;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
