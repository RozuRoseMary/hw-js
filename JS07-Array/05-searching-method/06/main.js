// จงหา index ใน tasks ที่มี id เท่ากับ 2

const tasks = [
  { id: 1, name: "Fishing" },
  { id: 2, name: "Shopping" },
  { id: 3, name: "Swimming" },
];
// expected result: 1

let funcFindIndex = (id) => {
  let findIndex = tasks.filter((el, i) => {
    if (el.id === id) {
      console.log(i);
    } else {
      return false;
    }
  });
};
funcFindIndex(2);

// solution -> findIndex
// const idx = tasks.findIndex((el) => 2 === el.id);
// console.log(idx);
