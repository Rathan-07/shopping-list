 const logo = document.querySelector('img');

 const onClick = () =>console.log('click event');

 const onDoubleClick = () =>{

     document.body.style.backgroundColor = 'red';


 };
//Event Listeners


 logo.addEventListener('click',onClick);
 logo.addEventListener('dblclick',onDoubleClick);

// const addTag = document.querySelector('form-control');

// const onClick1 = () =>{
//    document.body.style.background = 'blue';
// };
// addTag.addEventListener('click',onClick1);