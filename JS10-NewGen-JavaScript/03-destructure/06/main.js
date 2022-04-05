// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

function getUserData({ firstName, favoriteColor = "green" }) {
  // return `Your name is ${firstName} and you like ${favoriteColor}`;
  console.log(`Your name is ${firstName} and you like ${favoriteColor}`);
}

getUserData({ firstName: "Alejandro", favoriteColor: "purple" }); // * Your name is Alejandro and you like purple
getUserData({ firstName: "Melissa" }); // ** Your name is Melissa and you like green
getUserData({}); // *** Your name is green and you like green x
// ***  Your name is undefined and you like green
