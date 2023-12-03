const post ={

    id:1,
    title:'rkg',
    body:'This is the body',
    
};

// covert  to JSON string

const str = JSON.stringify(post);

//parse JSON

const obj = JSON.parse(str);

const posts = [
    {

    id:1,
    title:'rkg',
    body:'This is the body',
    
},
{

    id:2,
    title:'rkg1',
    body:'This is the body',
    

},
 


];
const str2  = JSON.stringify(posts);
console.log(str2);


