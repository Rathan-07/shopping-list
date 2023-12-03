const email = 'test@gmail.com';
if(email)
{
    console.log("you have passed an a email");
}
console.log(Boolean(email));

//Falsy values:

//-false
//-0
//-"" or ' ' (EMPTY STRING)
// -null
// -undefined
// -NaN


// truthy values


// -true
// - '0' 
// - ' ' 
// - 'false'
// - [] 
// - {}
// - function () {}

const x = NaN;

if(x) {

    console.log("this is truthy");
}
else {
     console.log("this is falsy");
}
console.log(Boolean(x));





//Truthy and falsy values


const children =  3;
if(!isNaN(children))
{
    console.log("yes");
}
else{


    console.log("no");
}

// checking for empty arrays



const posts = [1];

console.log(posts.length);

if(posts){

   
    console.log("list posts");
}


else{
    console.log("no posts");
}

//checking for empty objects

const user = {

    name:"rathan",
};

if(Object.keys(user).length>0){
    console.log("list user");

}
else{
    console.log("no user");
}
