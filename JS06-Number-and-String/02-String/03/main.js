// จงเขียนฟังก์ชัน ucFirst(str) เพื่อแปลงตัวอักษรตัวแรกของ str ให้เป็นตัวพิมพ์ใหญ่ ส่วนตัวอักษรที่เหลือให้มีขนาดเหมือนเดิม

let ucFirst = (str) => console.log(str[0].toUpperCase() + str.slice(1));
ucFirst("rose");
ucFirst("my name is rose");
