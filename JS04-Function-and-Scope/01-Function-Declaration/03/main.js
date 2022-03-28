let message = "Welcome to Thailand";

function logMessage(message) {
  message = "Hello everybody";
  console.log(message); // * Hello everybody
}

logMessage(message);
console.log(message); // ** Welcome to Thailand

let name = "John";

function sayHi(input) {
  console.log(name); // *** John
  name = input;
}

sayHi();
console.log(name); // **** //undefile
