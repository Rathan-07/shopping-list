let x;
const person  = {

    name:"rathan",
    age:30,
    isAdmin:true,
    address: {
        street:'123 Main st',
        city:'Boston',
        state:'MA'
    },
    hobbies: ['music','sports','reading']
};

x = person.name;
x = person['age'];
x = person.hobbies[0];
x = person.hobbies[0]= "flirt";
person['isAdmin'] = false;
delete person.age;
person.hasChildren = true;

person.greet = function ()
{
    console.log('Hello, my name is' + this.name);
}
person.greet();

// console.log(x);