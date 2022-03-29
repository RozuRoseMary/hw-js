// - จงเขียนฟังก์ชันเพื่อตรวจสอบข้อความ หากในข้อความนั้นมีคำว่า xxx, sex, porn ให้ return ค่าเป็น true แต่ถ้าไม่มีให้ return ค่าเป็น false
// - ให้ตรวจสอบแบบ case-insensitive เช่น XXX, pOrn, sEX ให้ถือว่าเป็นคำเดียวกับ
// 		xxx, porn, sex ตามลำดับ

let findWord = (text) => {
  if (
    text.toLowerCase().includes("xxx") ||
    text.toLowerCase().includes("sex") ||
    text.toLowerCase().includes("porn")
  ) {
    console.log(true);
  } else {
    console.log(false);
  }
};

findWord("xxx sadfsdf");
findWord("XXX fasfdasf");
findWord("sadasd sex");
findWord("sadasd sEX");
findWord("PORN");
