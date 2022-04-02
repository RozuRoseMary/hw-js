//จงนับชื่อที่ปรากฏใน names

let names = ["Jack", "John", "Bill", "John", "Rick", "Bill", "John"];
// expected result: {Jack: 1, John: 3, Bill: 2, Rick: 1}

let count = {};
let zero = 0;

names.forEach((el) => {
  if (count[el]) {
    count[el]++;
  } else {
    count[el] = 1;
  }
});
console.log(count);
