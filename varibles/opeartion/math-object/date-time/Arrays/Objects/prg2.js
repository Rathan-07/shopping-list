let x;

const todo = new Object();

todo.id = 1;
todo.name ='Buy milk';

x = todo;

const person = {

    name:"rathan",
    age:30,
};
x = person.name;
const o1 = {a:1,b:2};

const o2 = {c:3,d:2};
const o3 = {...o1,...o2};

const o4 = Object.assign({}, o1,o2);




const k = [

    {id:1, name:"Buy Milk"},
    {id:2 ,name:'pickup'},
];
x = k[0].name;
x = Object.keys(k);

x= k.length;
x = Object.values(k);
x = Object.entries(k);
x = k.hasOwnProperty('name');

console.log(x);