let x;
const arr =[1,2,3,4,5];
const arr1 = [5,6,7,8,9,10];
//sol1
// const arr3 = arr.slice(0,4);
// x = [...arr3,...arr1];

//sol2

const arr3 = arr.slice(0,4).concat(arr1);
//sol3

const arr4 = [...arr3,...arr1]
arr4.splice(4,1);
console.log(arr3);
