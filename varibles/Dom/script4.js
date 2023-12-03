// insertAdjacentElement Example

function insertAdjacentElement(){

    const filter = document.querySelector('.filter');

    const h1 = document.createElement('h1');
    h1.textContent ='Hello';
    filter.insertAdjacentElement('beforebegin',h1);
}
// insertAdjacentElement();
//insertAdjacentText

function insertAdjacentText(){

    const item = document.querySelector('li:first-child');

    item.insertAdjacentText('afterend','hi');
}
// insertAdjacentText();

//insertAdjacentHTML example


function insertAdjacentHTML(){

    const clearBtn = document.querySelector('#clear');

    clearBtn.insertAdjacentHTML('afterend','<h2>hi</h2>');

}
// insertAdjacentHTML();

//insertBefore

function insertBefore(){

    const ul = document.querySelector('ul');
    const li  = document.querySelector('li');

    li.textContent='bye';

    const third = document.querySelector('li:nth-child(3)');

    ul.insertBefore(li,third);



}
// insertBefore();



function insertAfter(newel,oldel){
  oldel.parentElement.insertBefore(newel,oldel.nextSibling);

}

// New  element to insert

const li = document.createElement('li');
li.textContent = 'Insert Me After';

//Existing element to insert After

const firstItem = document.querySelector('li:fisrt-child');
//Our own function

insertAfter(li,firstItem);
