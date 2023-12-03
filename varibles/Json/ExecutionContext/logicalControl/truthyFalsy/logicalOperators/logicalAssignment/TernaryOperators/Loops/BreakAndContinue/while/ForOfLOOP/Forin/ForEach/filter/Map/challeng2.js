const a = [1,2,-5,-1,1];

const res = a
.filter((n)=>n>0)
.reduce((p,c)=>p+c,0);
// console.log(res);


const a1 = ['coder','rathan','knife'];

const res1 = a1.map((word)=>{

    return word[0].toUpperCase()+word.slice(1,word.length);
});
// console.log(a1);
const arr1 = [1,2,3,4,5,56];
// x = arr1.slice(1,4);
 x = arr1.splice(1,4)
// x = arr.splice(2,1);


console.log(x,arr1);