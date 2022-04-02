// จงหา unique array element ของ alphabets

let alphabets = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d", "d"];
// expected result: ['a', 'b', 'c', 'e', 'd']

let set = new Set(alphabets);
console.log(Array.from(set));
