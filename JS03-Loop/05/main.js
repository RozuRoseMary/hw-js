// - ให้คำนวณเงินฝากสะสมโดยปีที่ 1 มีเงินเริ่มต้น 100,000 ธนาคารให้ดอกเบี้ยร้อยละ 2.5 ต่อปี

// - โดยจ่ายดอกเบี้ยปีละครั้ง ดอกเบี้ยที่ได้จะสะสมและทบยอดไปในเงินฝากปีถัดไป

// - เมื่อครบ 10 ปี จะมียอดเงินฝากสะสมเท่าใด (ไม่มีการฝากเพิ่มและถอนออก)
/*
y1 : 100,000 
y1 :   2,500 = 0.025
y2 : 102,500
y2 :   2,562.5  x(100,000 * 0.025 * 0.025)

*/

let money = 100000;

for (let i = 0; i <= 10; i++) {
  money = money * 1.025;
  console.log(i, money);
}
