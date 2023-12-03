// console.log(window);
// console.log(document.links[0]);



// // document.body.innerHTML = '<h1>Helloo world</h1>';
// console.log(document.getElementById('main'));


// const main = document.getElementById('main');
// // main.innerHTML = '<h1>Hello from main</h1>';

// document.querySelector('#main h1').innerHTML = 'Hello';





//document.getElementById()
// const d = document.getElementById('main');
// console.log(d);


// //get/change content

// console.log(d.textContent);
// d.textContent = 'Hello world';
// d.innerText - 'Hello buddy';
// d.innerHTML = '<strong>Shopping List</>';
// //change styles
// d.style.color = 'red';
// d.style.backgroundColor = 'black';
// d.style.padding ='10px';

// //document.querySelector()
// console.log(document.querySelector('strong'));
// console.log(document.querySelector('#main'));




// const listItems = document.querySelectorAll('.item');


// listItems.forEach((item)=>{
//   item.style.color ='red';
// });

1

//Get child elements


let output;


const parent = document.querySelector('.parent');
output = parent.children;
output = parent.children[1].innerText;
output = parent.children[1].className;
output = parent.children[1].nodeName;
parent.children[1].style.color = 'red';
parent.children[1].innerText = 'Child two';
parent.children[2].innerText = 'Child three';
parent.firstElementChild.innerText = 'child One';
// console.log(output);



//Get parent elements from a child





const child = document.querySelector('.child');

output = child.parentElement;

child.parentElement.style.border = '1px solid #ccc ';
child.parentElement.style.padding = '10px';
console.log(output);


// sibling elements 



const secondItem = document.querySelector('.child:nth-child(2)');
output = secondItem;
output = secondItem.nextElementSibling;
secondItem.nextElementSibling.style.color = 'green';
console.log(output);





