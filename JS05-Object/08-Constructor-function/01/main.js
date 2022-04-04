// ให้สร้าง Object calculator ซึ่งมี 3 method  (ให้ใช้วิธี Constructor Function)
// - read() ให้รับค่า input 2 ค่า
// - sum() ให้ return ค่าผลบวกของเลขทั้งสอง
// - mul() ให้ return ค่าผลคูณของเลขทั้งสอง

function Calculator(read, sum, mul) {
  this.firstNum = 0;
  this.secondNum = 0;
  this.read = function () {
    this.firstNum = +prompt("Enter first number");
    this.secondNum = +prompt("Enter second number");
  };
  this.sum = function () {
    return this.firstNum + this.secondNum;
  };
  this.mul = function () {
    return this.firstNum * this.secondNum;
  };
}

const cal = new Calculator(); //

// console.log(cal);
cal.read();
alert(cal.sum());
alert(cal.mul());
