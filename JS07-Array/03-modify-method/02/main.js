// ผลจากการรันคำสั่งในบรรทัด * คืออะไร

let arr = ["a", "b"];

arr.push(function () {
  alert(this);
});

arr[2]();
/* 
a,b function () {
  alert(this);
}

this = arr
*/
