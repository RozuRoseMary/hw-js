/*
 **ให้เขียนฟังก์ชันตรวจสอบตัวเลขว่าเป็นจำนวนเฉพาะหรือไม่ในรูปแบบ** Arrow Function
 */

//solution
let primeNumber = (number) => {
  for (let i = 2; i < number / 2; i++) {
    if (number % i === 0) {
      console.log(false);
    }
    console.log(true);
  }
};

// primeNumber(4);
primeNumber(5);
// primeNumber(6);
primeNumber(7);
