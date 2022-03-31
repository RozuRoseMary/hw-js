// - จงสร้างตัวแปร Array ชื่อ animals โดยมี element 3 ตัว คือ Dog, Cat, Rat
let animals = ["Dog", "Cat", "Rat"];

// - ให้เพิ่ม Fish ต่อท้ายเข้าไปใน animals
animals.push("Fish");

// - ให้เพิ่ม Horse เข้าไปข้างหน้า animals
animals.unshift("Horse");

// - ให้เพิ่ม Giraffe และ Snake ต่อท้าย animals โดยต้องเพิ่มเข้าไปพร้อมกัน
animals.push("Giraffe", "Snake");

// - ให้เอา Horse ออกจาก animals
animals.shift();

// - ให้เอา Snake ออกจาก animals
animals.pop();

// - ให้เอา Dog ออกจาก animals
animals.shift();

// - ผลลัพธ์สุดท้ายของ animals คืออะไร
console.log(animals); //['Cat', 'Rat', 'Fish', 'Giraffe']
