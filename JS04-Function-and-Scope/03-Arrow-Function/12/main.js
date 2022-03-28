// ให้เขียนฟังก์ชันคำนวณค่า factorial

let factorial = (number) => {
  let sum = 1;
  for (i = 1; i <= number; i++) {
    sum *= i;
  }
  console.log(sum);
};

factorial(1, "e = 1");
factorial(4, "e = 24");
factorial(7, "e = 5040");
