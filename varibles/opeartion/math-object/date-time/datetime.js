// let d;
// d = new Date();
// d = d.toISOString();
// d = new Date(2021,0,10,12,30,0);
// d = new Date('07/10/2021 12:30:00');
// d = new Date('2022-07-19');
// d = Date.now();
// d = new Date('07-10-2022 12:30:00');
// d = d.getTime();
// d = d.valueOf();

// d = Math.floor(Date.now() /1000);/// seconds
// console.log(d);















let x;
let d = new Date();
x = d.toISOString();

x = d.getTime();
x = d.valueOf();

x = d.getFullYear();

x = d.getDate();

x = d.getHours();

x = d.getMinutes();

x = '${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}';
console.log(x);
