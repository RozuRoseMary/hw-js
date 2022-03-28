const showModal = alert;
showModal("Execute modal");
// *Execute modal
// bc' alert is function that keep in showModal

const showModal = alert();
showModal("Execute modal");
// **..Blank.. เพราะใน alert เป็นค่าว่าง
