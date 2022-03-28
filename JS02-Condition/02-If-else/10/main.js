let login = prompt("Enter position");

let mag =
  login == "Employee"
    ? alert("Hello")
    : login == "Director"
    ? alert("Greetings")
    : login == ""
    ? alert("No login")
    : alert("");
