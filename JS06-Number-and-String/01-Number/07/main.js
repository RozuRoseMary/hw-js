// จงเขียนฟังก์ชันในการสุ่มตัวเลขลูกเต๋า โดยผลลัพธ์ต้องเป็นตัวเลขจำนวนเต็มตั้งแต่ 1 ถึง 6

let number = () => console.log(Math.floor(Math.random() * 6) + 1); //1-6
// let number = () => console.log(Math.floor(Math.random() * 6)); //0-5

number();
