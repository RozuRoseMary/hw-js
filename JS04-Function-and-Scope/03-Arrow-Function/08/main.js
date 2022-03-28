let football = (score) =>
  score == "win" ? 3 : score == "draw" ? 1 : score == "lose" ? 0 : false;

console.log(football("win"));
console.log(football("draw"));
console.log(football("lose"));
