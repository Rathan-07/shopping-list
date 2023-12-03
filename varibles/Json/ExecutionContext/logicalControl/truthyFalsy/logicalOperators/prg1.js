//  && - will return first falsy value or last value

let a;
a = 10 && 20;
a = 10 && 0  && 30;
// console.log(a);

// || - will return the first truthy value or the last value


let b;


b = 10 || 20;

b = 0 || 20;

b = 0|| null || ' '|| undefined;
console.log(b);


// ?? -Returns the right side operand when the left is null or undefined


let c;

c = 10 ?? 0;
c = 10 ?? 20;
c = null ?? 20;
console.log(c);