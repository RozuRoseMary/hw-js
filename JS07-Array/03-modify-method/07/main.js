// ให้เขียนโค้ดเพื่อ remove element ในตัวแปร fish ออกให้หมด

let fish = ["angel", "clown", "mandarin", "sturgeon"];

let remove = (arr) => {
  console.log(arr.splice(0, arr.length));
};

remove(fish);
