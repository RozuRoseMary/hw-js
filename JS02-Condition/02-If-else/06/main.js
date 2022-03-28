// - จงเขียนโค้ดเพื่อรับ input ที่เป็นตัวเลขเข้ามา 2 ค่า
// - ให้โชว์ข้อความผลบวกของตัวเลขทั้ง 2
// - หากมี input อันนึงไม่ใช่ตัวเลข ให้โชว์ข้อความ “Invalid number”

let firstNumber = prompt("Input first number.");
let secondNumber = prompt("Input second number.");

//solution function
function isInvalidNumber(checkValue) {
  return checkValue === null || checkValue.trim() === "" || isNaN(checkValue);
  //isNaN(checkValue) => have limitation, when check empty string => return false
}
function isValidNumber(checkValue) {
  return !(
    checkValue === null ||
    checkValue.trim() === "" ||
    isNaN(checkValue)
  );
}

let sum = Number(firstNumber) + Number(secondNumber);

if (isInvalidNumber(firstNumber) || isInvalidNumber(secondNumber)) {
  alert("Invalid number");
} else {
  alert(sum);
}
