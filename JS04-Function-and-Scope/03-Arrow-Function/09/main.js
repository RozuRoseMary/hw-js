let findLeapYear = (leapYear) =>
  leapYear % 100 === 0 && leapYear % 400 === 0
    ? console.log(true)
    : leapYear % 4 === 0 && leapYear % 100 !== 0
    ? console.log(true)
    : console.log(false);

findLeapYear(400);
findLeapYear(1800);
findLeapYear(1900);
findLeapYear(2000);
