//step1
const library = [
    {

        title:"M ",
        author:"a ",
        status: {

            own:true,
            reading:false,
            read:false,
        },
    },

 
    {
       title:" A",
       author:"f ",
       status: {

        own:true,
        reading:false,
        read:false,
    },
},
{
    title:"k ",
    author:"a ",
    status: {

        own:true,
        reading:false,
        read:false,
    },

},

];
//step2
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;
console.log(library);
//step3


const  { title :firstBook} = library[0];
console.log(firstBook);

//step4

const libraryJSON = JSON.stringify(library);
console.log(libraryJSON);