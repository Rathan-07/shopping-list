//default parameter


function register(user = "bot")
{

     return user + " "+'is registered';

}

console.log(register('gta'));



// Rest Params

function sum(...numbers)
{
    let total = 0;
    for(const num of numbers)
    {
        total+=num;
    }
    return total;
}
console.log(sum(1,3,3));

//Objects as params

function loginUser(user){

    return 'the user is ' +user.name+ 'the id' + user.id;

}

const user = {

    id:1,
    name:'john',
};
console.log(loginUser(user));


//Array as params

function getRandom(...arr){
    const randmIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randmIndex];
}
console.log(1,2,3);