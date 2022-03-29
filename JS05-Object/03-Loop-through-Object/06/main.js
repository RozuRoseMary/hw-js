// - ให้เขียนโปรแกรมรับค่า 4 ค่าได้แก่ ชื่อสินค้า จำนวนที่ขาย ราคาต่อชิ้น และส่วนลดต่อชิ้นหน่วยเป็นเปอร์เซนต์
// - นำค่าที่รับมาไปสร้างเป็น object ที่มี key-value ตามค่าที่รับมา ถ้าส่วนลดเป็น 0 หรือไม่มีค่าไม่ต้องสร้าง key-value ที่เก็บส่วนลด
// - สร้างฟังก์ชันคำนวณราคาที่แท้จริงของ object (ราคาหลังหักส่วนลด)

const result = {};

let products = prompt("Enter products");
let amount = prompt("Enter amount");
let price = prompt("Enter price");
let discount = prompt("Enter discount");

const product1 = {
  products,
  amount,
  price,
  discount,
};

if (discount > 0) {
  product1.discount = discount;
}

const calPrice = (obj) => {
  // if (obj.discount) {
  //   //if discount have value
  //   return (
  //     obj.amount * obj.price - (obj.discount / 100) * obj.price * obj.amount
  //   );
  // }
  // return obj.amount * obj.price;
  return obj.amount * obj.price * (1 - (obj.discount || 0) / 100);
};
