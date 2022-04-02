จงนับชื่อที่ปรากฏใน names

let names = ['Jack', 'John', 'Bill', 'John', 'Rick', 'Bill', 'John'];
// expected result: {Jack: 1, John: 3, Bill: 2, Rick: 1}

let countName = names.reduce((acc,el,index,array),0)