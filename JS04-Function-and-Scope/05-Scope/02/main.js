// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

function makeWorker() {
  let name = "Pete";
  return function () {
    alert(name);
  };
}
let name = "John";
let work = makeWorker();
work(); // *Pete เพราะเรียกใช้ฟังชัน makeWorker ซึ่งมีตัวแปร Pete อยู่ด้านใน
