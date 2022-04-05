// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

let planetFacts = {
  numPlanets: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659,
};
let { numPlanets, ...discoveryYears } = planetFacts;
console.log(discoveryYears); // * {1846, 1659} x
// { yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659 }
