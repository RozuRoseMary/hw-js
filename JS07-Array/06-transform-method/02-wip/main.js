// จงเขียนฟังก์ชันในการแปลงคำที่อยู่ในรูปแบบ dash-separated เช่น background-color ให้อยู่ในรูปแบบ camelCase เช่น backgroundColor

let str1 = "background-color"; //backgroundColor

let camelCase = (str) => {
  let splitCha = str.split("-");
  // splitCha[1][0];
  let upperCase = str.split("-")[1][0].toUpperCase();

  let mapStr = splitCha.map((el, index, array) => {
    // if (index > 0)
    return el;
  });
  camelCase(mapStr);
};
camelCase(str1);

//split
//upper case
//joint
