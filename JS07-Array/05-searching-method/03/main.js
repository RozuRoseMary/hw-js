// ผลจากการรันคำสั่งในบรรทัด * คืออะไร

console.log([1, 2, 3].includes(2)); // * t
console.log([1, 2, 3].includes(4)); // ** f
console.log([1, 2, 3].includes(3, 3)); // *** f
console.log([1, 2, 3].includes(3, -1)); // **** t
console.log([1, 2, NaN].includes(NaN)); // ***** t
console.log(["1", "2", "3"].includes(3)); // ****** f
