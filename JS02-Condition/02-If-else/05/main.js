let inputNumber = prompt("Input number.");

// if (inputNumber % 2 == 0) {
//   alert("Even number");
// } else {
//   alert("Odd number");
// }

// solution
if (inputNumber === null || inputNumber.trim() === "" || isNaN(inputNumber)) {
  //trim => remove long space
  alert("Invalid number");
} else if (inputNumber % 2 == 0) {
  alert("Even number");
} else {
  alert("Odd number");
}
