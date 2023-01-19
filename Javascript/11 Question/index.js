// 11. Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.

// let date = new Date();
// // What is the year today?
// console.log(date.getFullYear());
// // What is the month today as a number?
// console.log(date.getMonth());
// // What is the date today?
// console.log(date.getDate());
// // What is the day today as a number?
// console.log(date.getDay());
// // What is the hours now?
// console.log(date.getHours());
// // What is the minutes now?
// console.log(date.getMinutes());

// Find out the numbers of seconds elapsed from January 1, 1970 to now?
let date1  = new Date('01/01/1970')
let date2 = new Date()
let diffinYear = date2.getFullYear() - date1.getFullYear()
let diffinMonth = date2.getMonth() - date1.getMonth()
let diffinDays = date2.getDate() - date1.getDate()

// This gives difference in milliseconds
let diff = date2-date1
console.log(`date 1 is ${date1} and date 2 is ${date2}`);
console.log(`Difference in year ${diffinYear} Years`);
console.log(`Difference in Month ${diffinYear*12} months`);
console.log(`Difference in Days ${Math.round(diff/(1000*60*60*24))} days`);
console.log(`Difference is seconds ${Math.round((date2-date1)/1000)}`);    