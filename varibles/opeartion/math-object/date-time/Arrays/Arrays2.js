let x;

const fruits =['apple','mango','bananna'];
const berries =['greenapple','blueberry','rose'];

//fruits.push(berries);


//x = fruits[3][2];
const allfruits =[fruits,berries];
x = allfruits[0][0];

x = fruits.concat(berries); 


//spread Operators(...)
x = [...fruits,...berries]

//Flatten Arrays

const arr = [1, 2, [3,4], 5, [6,7], 8];
x =arr.flat();


// static Methods on Array Object

x = Array.isArray('hello');

x = Array.from('12345');


console.log(x);


//challenge2

function minMax(){
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    // console.log(min);
     
    return {

        min,
        max,
    };

}
 console.log(minMax([1,2,3,4,5]));
