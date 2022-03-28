// ให้สร้าง Constructor Function: Accumulator(startingValue)
// - มี property ชื่อ currentValue ไว้เก็บค่าสะสม (มีค่าเท่ากับ startingValue ตอน Object ถูกสร้าง)
// -  มี method  read() ให้รับค่า input และให้บวกเข้ากับค่า currentValue
// -  มี method  show() ให้ alert ค่า currentValue

function Accumulator(startingValue) {
  this.currentValue = startingValue;
  this.read = function () {
    this.currentValue = +prompt("Enter number");
    this.currentValue += this.currentValue;
  };
  this.show = function () {
    alert(this.currentValue);
  };
}

const obj = new Accumulator(5);
console.log(obj);
obj.read();
obj.show();
