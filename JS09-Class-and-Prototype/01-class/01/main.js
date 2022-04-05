// - ให้สร้าง Class ชื่อ Calculator มี property และ method ดังนี้
// - value คือค่าตัวเลขปัจจุบัน (เริ่มต้นเป็น 0 หรือตามที่กำหนด) เช่น new Calculator(10) ให้ value มีค่าเท่ากับ 10
// - sum() ให้รับค่าตัวเลขและรวมผลรวมเข้าใน value
// - subtract() ให้รับค่าตัวเลขและหักออกจาก value
// - multiply() ให้รับค่าตัวเลขและคูณตัวเลขกับ value
// - divide() ให้รับค่าตัวเลขและนำไปหาร value
// - show() ให้ alert ค่า value

class Calculator {
  value = 0;
  constructor(value) {
    this.value = value;
    this.num = 0;
  }

  sum() {
    this.num = +prompt("Enter num to sum");
    this.value = this.value + this.num;
    alert(`initiate value + ${this.num} = ${this.value}`);
  }

  subtract() {
    this.num = +prompt("Enter num to subtract");
    this.value = this.value - this.num;
    alert(`Num - ${this.num} = ${this.value}`);
  }

  multiply() {
    this.num = +prompt("Enter num to multiply");
    this.value = this.value * this.num;
    alert(`Num * ${this.num} = ${this.value}`);
  }

  divide() {
    this.num = +prompt("Enter num to divide");
    this.value = this.value / this.num;
    alert(`Num / ${this.num} = ${this.value}`);
  }

  show() {
    alert("result : " + this.value);
  }
}
let calculator = new Calculator(10);
calculator.sum();
calculator.subtract();
calculator.multiply();
calculator.divide();
calculator.show();

// class Calculator {
//   constructor(value) {
//     this.value = 0;
//     this.inputNumber = 0;
//   }

//   sum(value) {
//     return this.value + prompt("Enter number");
//   }

//   subtract(value) {
//     // return this.value;
//     this.value /= +prompt("Enter number");
//   }

//   multiply(value) {
//     return this.value;
//   }

//   divide(value) {
//     return this.value;
//   }

//   show(value) {
//     alert(this.value);
//   }
// }

// let calculator = new Calculator(10);
// // calculator.sum();
// console.log(calculator.sum());
// console.log(calculator.subtract());
