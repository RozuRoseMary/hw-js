// จงเรียงข้อมูลใน arr โดยเรียงตามค่า element ยกกำลัง 2 จากน้อยไปหามาก

const arr = [-3, 2, 0, -7, 4, 6];
let mulTwo = arr.map((el) => el ** 2);
mulTwo.sort((a, b) => a - b);
console.log(mulTwo);
