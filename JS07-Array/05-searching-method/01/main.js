// ผลจากการรันคำสั่งในบรรทัด * คืออะไร

const beasts = ["ant", "bison", "camel", "duck", "bison"];
console.log(beasts.indexOf("bison")); // * 1 bison ตัวแรก อยู่ index ที่ 1
console.log(beasts.indexOf("bison", 2)); // ** 4 เริ่มต้นที่ index 2 หา bison ตัวแรกที่เจออยู่ index ที่ 4
console.log(beasts.indexOf("giraffe")); // *** -1 not found "giraffe"
