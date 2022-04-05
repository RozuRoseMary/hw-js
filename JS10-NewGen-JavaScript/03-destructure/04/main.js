// บรรทัด \* ให้ผลลัพธ์เป็นอะไร เพราะอะไร

function sayHi(name) {
  let name = "Guest";
  console.log(name); // * Jim x => error: name already been declared as parameter.
}

sayHi("Jim");
