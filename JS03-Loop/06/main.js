// ให้เขียนโค้ดแสดงรูปดอกจันตามรูปแบบด้านล่าง โดยแสดงผลออกมาใน console

// ```
// *
// *	*
// *	*	*
// *	*	*	*
// ``` i >= j

// หมายเหตุ : คำสั่งขึ้นบรรทัดใหม่ใน console ให้ใช้ \n

let star = "";
for (let i = 0; i <= 4; i++) {
  for (let j = 0; j < i; j++) {
    star += "* ";
    console.log(i, j);
  }
  star += "\n";
}
console.log(star);

// let star = "";
// for (let i = 1; i <= 4; i++) {
//   star += "* ";
//   console.log(star);
// }

// let star = "";
// for (let i = 1; i <= 4; i++) {
//   star += "* ";
//   console.log(star);
// }

/*
 ****
 ****
 ****
 ****
 */

// let star = "";
// for (let i = 0; i <= 4; i++) {
//   for (let j = 0; j < 4; j++) {
//     star += "* ";
//     console.log(i, j);
//   }
//   star += "\n";
// }
// console.log(star);

/*

 */
