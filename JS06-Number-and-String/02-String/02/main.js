// จงหาความยาวของตัวแปร String ต่อไปนี้
// - 'Welcome to Thailand'
// - 'Don\'n be afraid\n'
// - 'สวัสดีประเทศไทย'

let findLength = (text) => console.log(text.length);

findLength("Welcome to Thailand"); //19
console.log("Don't be afraid\n"); //Don't be afraid
findLength("Don't be afraid\n"); //16 => \n.length = 1
findLength("สวัสดีประเทศไทย"); //15
