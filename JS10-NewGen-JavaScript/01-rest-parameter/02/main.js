// จงเขียนฟังก์ชัน filterOutOdds โดยพารามิเตอร์ของฟังก์ชันสามารถรับตัวเลขได้ไม่จำกัด และให้ return ค่าเป็น array ของเลขที่เป็นเลขคู่

let filterOutOdds = (...numbers) => {
  let arr = [];

  for (let number of numbers) {
    if (number % 2 === 0) {
      arr.push(number);
      // return arr
    }
  }
  return arr;
};
console.log(filterOutOdds(1));
console.log(filterOutOdds(1, 4, 3, 9));
console.log(filterOutOdds(2, 4, 9, 8, 10));
