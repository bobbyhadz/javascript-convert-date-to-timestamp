// EXAMPLE 1 - Convert a Date to a Timestamp using JavaScript

const str = '2022-04-26';

const date = new Date(str);

// ✅ Get timestamp in Milliseconds
const timestamp = date.getTime();
console.log(timestamp); // 👉️ 1650931200000

// ✅ If you need to convert milliseconds to seconds
// divide by 1000
const unixTimestamp = Math.floor(date.getTime() / 1000);
console.log(unixTimestamp); // 👉️ 1650931200

// ------------------------------------------------------------------

// // EXAMPLE 2 - Converting the timestamp to seconds

// const str = '2022-04-26';

// const date = new Date(str);

// // ✅ If you need to convert to Seconds
// const timestampSeconds = Math.floor(date.getTime() / 1000);
// console.log(timestampSeconds); // 👉️ 1650931200

// ------------------------------------------------------------------

// // EXAMPLE 3 - Convert a Date string to a Timestamp in JavaScript

// // 👇️ Formatted as MM/DD/YYYY
// const str = '04/16/2022';

// const [month, day, year] = str.split('/');

// const date = new Date(+year, month - 1, +day);
// console.log(date); // 👉️ Sat Apr 16 2022

// // ✅ Get timestamp
// const timestamp = date.getTime();
// console.log(timestamp); // 👉️ 1650056400000

// ------------------------------------------------------------------

// // EXAMPLE 4 - Convert a Date and Time string to a Timestamp in JavaScript

// // 👇️ Formatted as MM/DD/YYYY hh:mm:ss
// const str = '04/16/2022 06:45:12';

// const [dateComponents, timeComponents] = str.split(' ');
// console.log(dateComponents); // 👉️ "04/16/2022"
// console.log(timeComponents); // 👉️ "06:45:12"

// const [month, day, year] = dateComponents.split('/');
// const [hours, minutes, seconds] = timeComponents.split(':');

// const date = new Date(
//   +year,
//   month - 1,
//   +day,
//   +hours,
//   +minutes,
//   +seconds,
// );
// console.log(date); // 👉️ Sat Apr 16 2022 06:45:12

// // ✅ Get timestamp
// const timestamp = date.getTime();
// console.log(timestamp); // 👉️ 1650080712000
