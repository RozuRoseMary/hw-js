// - จงเขียนฟังก์ชัน updateTask(id, newName) เพื่อแก้ไขค่า element ใน tasks ที่มี property ชื่อ id เท่ากับ id โดยแก้ไข name ให้มีค่าเป็น newName
// - execute updateTask(2, 'Travelling')

const tasks = [
  { id: 1, name: "Fishing" },
  { id: 2, name: "Shopping" },
  { id: 3, name: "Swimming" },
];

let updateTask = (id, newName) => {
  let change = tasks.filter((el) => {
    if (id === el.id) {
      el.newName = newName;
      delete el.name;
    }
  });
  console.log(tasks);
};
updateTask(2, "Travelling");

// solution
// let updateTask = (id, newName) => {
//   const idx = tasks.findIndex((task) => task.id === id);
//   if (idx !== -1) {
//     //-1 is an index over arr.length
//     tasks[idx].name = newName;
//     console.log(tasks);
//   } else {
//     alert("Task with this id is not found");
//   }
// };
// updateTask(2, "Travelling");
