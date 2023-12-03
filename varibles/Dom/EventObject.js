// const logo = document.querySelector('img');

// function onClick(e){
//     console.log(e.target);
//     e.target.style.backgroundColor = 'black';

// }
// logo.addEventListener('click',onClick);

//type

const logo = document.querySelector('img');

function onClick(e){
    console.log(e.target);
    // e.target.style.backgroundColor = 'black';
    console.log(e.type);//
    console.log(e.clientX);
    console.log(e.clientY);

}
logo.addEventListener('click',onClick);
//position