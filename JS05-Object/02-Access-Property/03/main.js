// - ให้เขียนโค้ดเพื่อ log province ของ product1
// - หากมี product2 เป็น object
// ว่าง ให้ log province ของ
// product2 โดยใช้คำสั่งเดียวกับ
// product1
// - (หาก Error ให้หาวิธีแก้)

const product1 = {
  name: "Water",
  distributor: {
    name: "Giraffe Water Company",
    address: {
      street: "Phetchaburi",
      subdistrict: "Thanonphetchaburi",
      district: "Ratchathewi",
      province: "Bangkok",
    },
  },
};
console.log(product1.distributor.address.province);

let product2 = product1;
console.log(product2.distributor.address.province);
