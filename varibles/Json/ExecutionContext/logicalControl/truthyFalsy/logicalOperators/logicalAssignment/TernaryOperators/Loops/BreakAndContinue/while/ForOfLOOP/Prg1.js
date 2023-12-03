// const items = ['book','table','kite'];

// for (const item of items)
// {
//     console.log(item);
// }



// const users = [{name:'rathan'},{name:'kate'}];

//    for (const user of users)
//    {
//       console.log(user);
//    }

//loop over strings

const str = "hello world";

for(const letter of str){
    console.log(letter);
}

// loop over Maps

const map = new Map();

map.set('name','john');
map.set('age',30);

for(const [key,value]  of map)
{
    console.log(key,value );
}