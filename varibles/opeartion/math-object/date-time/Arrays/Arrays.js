let x;
const numbers = [12,45,33,20,39];

//Array constructor

const fruits = new Array('apple','bannana','orange');

x = 'my fav fruits is an ${fruits[2]}';
x = numbers.length;

fruits[2] = 'peer';
fruits.length = 2;
x = fruits

console.log(x);
