//ให้เขียนฟังก์ชันด้านล่างให้อยู่ในรูปแบบ Arrow Function

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }
// ask(
//   "Do you agree?",
//   function () {
//     alert("You agreed.");
//   },
//   function () {
//     alert("You canceled the execution.");
//   }
// );

let ask = (question, yes, no) => {
  confirm(question) ? yes(yes) : no(no);
};

ask(
  "Do you agree?",
  function () {
    alert("You agreed.");
  },
  function () {
    alert("You canceled the execution.");
  }
);
