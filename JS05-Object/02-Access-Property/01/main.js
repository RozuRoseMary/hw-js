const user = {
  name: "John",
  surname: "Doe",
};

let add = (user.name = "Matt");
let del = delete user.name;

console.log(add);
console.log(user);
