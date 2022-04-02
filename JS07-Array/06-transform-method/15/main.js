// จงสร้างฟังก์ชัน getAverageAge(arr) เพื่อหาอายุเฉลี่ยของ array

let john = { name: "John", age: 27 };
let jo = { name: "Jo", age: 21 };
let jin = { name: "Jin", age: 25 };

// let arr = [john, pete, mary];
let arr1 = [john, jo, jin];

let getAverageAge = (array) => {
  let result = array.reduce((acc, el) => acc + el.age, 0);
  return (result / array.length).toFixed(2);
};

// console.log(getAverageAge(arr)); // (27 + 21 + 25) / 3 = 24.33
console.log(getAverageAge(arr1)); // (27 + 21 + 25) / 3 = 24.33
