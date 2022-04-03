// ผลจากการรันคำสั่งในบรรทัด * คืออะไร

console.log([1, 2, 3].includes(2)); // * t : have element 2 in array
console.log([1, 2, 3].includes(4)); // ** f : don't have element 2 in array
console.log([1, 2, 3].includes(3, 3)); // *** f : start from index 3, don't have element 3
console.log([1, 2, 3].includes(3, -1)); // **** t : start from index -1, have element 3
console.log([1, 2, NaN].includes(NaN)); // ***** t : have element NaN
console.log(["1", "2", "3"].includes(3)); // ****** f : don't have element 3 (number)
