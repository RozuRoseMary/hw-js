// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

var name = "Joe";
function makeUser() {
  return {
    name: "John",
    ref: this, //this window obj
  };
}
let user = makeUser();
//console.log(user.ref); // window
console.log(user.ref.name); // * John x // Joe
