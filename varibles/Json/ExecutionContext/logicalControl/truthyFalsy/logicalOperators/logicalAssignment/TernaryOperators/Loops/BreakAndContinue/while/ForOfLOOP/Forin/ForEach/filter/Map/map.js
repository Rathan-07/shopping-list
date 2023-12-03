// const arr1 =[1,2,3,4,5];

// const map1 = arr1.map(i => i*2);
// console.log(map1);


// same with forEach



// const d = [];

// arr1.forEach((n)=>{
//      d.push(n*2);
// });
// console.log(d);


 const n = [2,4,8,67,16];

// const res = n
// .map((temp)=>Math.sqrt(temp))
// .map((sqrt)=>sqrt*2);
// console.log(res);

const  res = n
   .map(function(temp){
    return Math.sqrt(temp);

})
 
.map(function(sqrt){
    return sqrt *2;
})
// console.log(res);

//chaining different filter




const evenDouble = n
.filter((temp)=>temp%2==0)
.map((even)=>even*2);
// console.log(evenDouble);

const n1 = [1,2,3]

const sum = n1.reduce(function(p,c)
{
       return p+c;
},10);

// console.log(sum);


//short
const  sum2 = n1.reduce((p1,c1)=>p1+c1,0);
console.log(sum2);

//using  a loop


const sum3 = ()=> {

    let acc=0;
    for(const curr  of n){
        acc+=curr;
    }
    return acc;
};

console.log(sum3());



const cart =[
 
    {id:1, name: 'prod 1',price:130 },
    {id:2, name: 'prod 2',price:134 },
    {id:3, name: 'prod 3',price:167 },
    {id:4, name: 'prod 4',price:150 },
];

const total = cart.reduce(function(prev,products){
    return prev+products.price
},0);

console.log(total);

