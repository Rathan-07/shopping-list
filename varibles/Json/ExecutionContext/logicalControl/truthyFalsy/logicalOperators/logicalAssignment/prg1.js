// ||= assigns the right side value only if the left is falsy value



let a =20;

// if(!a)
// {
//     a = 10;
//     
// }

// a = a || 10;
a||= 10;
console.log(a);

// &&= assigns the right side value only if the left is a truthy value


let b = 20;
b = b && 10;
console.log(b);


// ??= assigns the right side value only if the left is
//null or undefined

let c = 8;

if(c===null || c===undefined)
{
    c = 20;
}
c = c ?? 20;
c ??=20;
console.log(c);

