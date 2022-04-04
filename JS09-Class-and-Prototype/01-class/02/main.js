// - ให้สร้าง Class Sale มี property ชื่อ name และมี method calcPrice() เพื่อคำนวณราคาสุทธิหลังหักส่วนลด
// - ให้สร้าง Class Beverage มี property ชื่อ amount, price และ discount
// - ให้ Beverage สืบทอดมาจาก Sale
// - ให้สร้าง object ชื่อ beverage จาก Class Beverage โดยมี name, amount, price และ discount เท่ากับ Pepsi, 3, 19 และ 10% ตามลำดับ
// - ให้ beverage เรียก method calcPrice()

class Sale {
  constructor(name) {
    this.name = name;
  }

  calcPrice() {
    console.log(this.amount * this.price * (1 + this.discount / 100));
  }
}

class Beverage extends Sale {
  constructor(name, amount, price, discount) {
    super(name);
    this.amount = amount;
    this.price = price;
    this.discount = discount;
  }
}

const beverage = new Beverage("Pepsi", 3, 19, 10);
beverage.calcPrice();
