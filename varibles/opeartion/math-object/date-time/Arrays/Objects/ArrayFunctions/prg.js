//Regular arrow fun

const add = (a,b) =>{
    
    return a + b;
};

console.log(add(1,2));

//implicit return 

const substact = (a,b) => a-b;

// Can leave  off() with  a single param
const double = a => a * 2;

console.log(substact(3,2));
console.log(double(3));

//Returning a object

const createObject = () =>
({
    name:'Brad',
});

console.log(createObject());

//ForEach

const num = [1,2,3,4,5];


num.forEach(function(n)
{
    console.log(n);
});
//Arrow fun in call back
// num.forEach((n) => console.log(n));
