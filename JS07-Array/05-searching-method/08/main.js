// - จงเขียนฟังก์ชัน deleteTask(id) เพื่อลบ element ใน tasks ที่มี property ชื่อ id เท่ากับ id
// - execute deleteTask(1)

const tasks = [
  { id: 1, name: "Fishing" },
  { id: 2, name: "Shopping" },
  { id: 3, name: "Swimming" },
];

let deleteTask = (id) => {
  let change = tasks.filter((el) => {
    if (id === el.id) tasks.splice(el, 1);
  });
  console.log(tasks);
};
deleteTask(1);

// solution 1::::::::::::::::::::::::::::::::::::::::::::::::
// const deleteTask = function (id) {
//   return tasks.filter(
//     (task) => task.id !== id // เอาที่เท่ากับ id อยู่
//   );
// };

// solution 2:::::::::::::::::::::::::::::::::::::::::::::::
// const deleteTask = function (id) {
//   const newTasks = tasks.splice();
//   const idx = tasks.findIndex((task) => task.id === id);
//   if (idx !== -1) {
//     tasks.splice(idx, 1);
//   }
//   return newTasks;
// };
