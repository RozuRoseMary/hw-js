let num = prompt("Input Number.");
//if convert to number
//
//when user input " " or esc it will return alert Zero

if (num > 0) {
  alert("Positive number");
} else if (num < 0) {
  alert("Negative number");
} else if (num == 0) {
  alert("Zero");
} else if (num != [0 - 9]) {
  alert("Invalid number");
}
