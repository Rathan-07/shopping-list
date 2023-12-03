const itemInput = document.getElementById('item-input');

const onKeyPress = (e)=>{
    console.log('keypress');
};

const onKeyDown =(e)=>{
//key
// console.log(e.key);
// if(e.key ==='Enter'){
//     alert('You pressed enter');
// }
//keyCode gives a no

if(e.keyCode===13){
    alert('you have pressed 13');

}

//code
// if(e.code)
};
// itemInput.addEventListener('keypress',onKeyPress);
itemInput.addEventListener('keydown',onKeyDown);