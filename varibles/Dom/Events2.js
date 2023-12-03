const itemInput = document.getElementById('item-input');
const priorityInput  = document.getElementById('priority-input');
const checkbox = document.getElementById('checkbox');
const heading = document.querySelector('hi');


function onInput(e){
//    console.log('Input');
 heading.textContent = e.target.value;
}


function onChecked(e){
    // console.log(e.target.checked);
    const isChecked = e.target.checked;
    heading.textConte   =  isChecked ? 'checked': 'not checked';
}

function onFocus(){
 console.log('Input  is focused'); 
 itemInput.style.outlineStyle ='solid';
 itemInput.style.outlineWidth='1px';
 itemInput.style.outlineColor ='red';
   

}

function onBlur(){
    console.log('Input is not focused');
    itemInput.style.outlineStyle ='none';
}
itemInput.addEventListener('change',onInput);
priorityInput.addEventListener('change',onInput);
checkbox.addEventListener('input',onChecked);
itemInput.addEventListener('focus',onFocus);
itemInput.addEventListener('blur',onBlur);
