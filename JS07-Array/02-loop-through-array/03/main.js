// - จงสร้างตัวแปร summary โดยใช้ค่าจากตัวแปร sales
// - netPrice = price x discount (ถ้าไม่มี discount ให้ถือว่า netPrice = price)

/*
const summary = [
  { netPrice: 900 }, 
  { netPrice: 475 },
  { netPrice: 100 }
];
*/
// variance
const sales = [
  { price: 1000, discount: 0.1 },
  { price: 500, discount: 0.05 },
  { price: 100 },
];

//function
let findRealSales = (arr) => {
  let summary = [];

  for (let i = 0; i < arr.length; i++) {
    if (sales[i].discount !== undefined) {
      // calPrice = price * price
      let calPrice = sales[i].price * (1 - sales[i].discount);
      summary[i] = { netPrice: calPrice };
    } else {
      summary[i] = sales[i].price;
    }
  }
  console.log(summary);
};

//call function
findRealSales(sales);
