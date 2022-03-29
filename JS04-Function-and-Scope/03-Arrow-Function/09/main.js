// ให้เขียนฟังก์ชันตรวจสอบปีที่เป็น leap year
// - leap year คือปี ค.ศ. ที่หารด้วย 4 ลงตัว
// - ยกเว้นปีที่เป็นผลคูณของ 100 เช่น 1800, 1900, 2000 จะต้องหารด้วย 400 ลงตัว

let findLeapYear = (leapYear) =>
  leapYear % 100 === 0 && leapYear % 400 === 0
    ? console.log(true)
    : leapYear % 4 === 0 && leapYear % 100 !== 0
    ? console.log(true)
    : console.log(false);

findLeapYear(400);
findLeapYear(1800);
findLeapYear(1900);
findLeapYear(2000);
