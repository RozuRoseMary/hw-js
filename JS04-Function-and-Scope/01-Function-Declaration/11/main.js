function sayHi(age) {
  if (age < 12) alert("Hi kid");
}
console.log(sayHi()); // *
console.log(sayHi(10)); // **Hi 10

/////////////////////////////////////////////////

function sayHi(name) {
  if (name) {
    alert("Hi " + name);
    return;
  } else {
    return "Who are you";
  }
}
// console.log(sayHi("John")); // *** Hi John
console.log(sayHi()); // ****
