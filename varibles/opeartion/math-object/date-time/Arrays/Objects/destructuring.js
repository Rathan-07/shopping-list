const firstName = 'John';
const lastName = 'Doe';
const age = 30;

const person ={

    firstName,
    lastName,
    age,

};
console.log(person.lastName);

const todo  = {

    id:1,
    title:'rdx',
    user:{

        name:"John",
    },

};


const {id, title, user:{name}} = todo;

const numbers = [23,67,33,49,1,2,3];
const [first,second, ...rest]=numbers;
console.log(first,second,rest);