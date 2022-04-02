// จงเขียนฟังก์ชันในการแปลงคำที่อยู่ในรูปแบบ dash-separated เช่น background-color ให้อยู่ในรูปแบบ camelCase เช่น backgroundColor

let str1 = "background-color"; //backgroundColor

let camelCase = (str) => {
  let splitCha = str.split("-");
  let splitOne = splitCha[1].split("");
  splitOne[0] = splitOne[0].toUpperCase();
  splitCha[1] = splitOne.join("");
  let result = splitCha.join("");
  console.log(result);
};
camelCase(str1);
