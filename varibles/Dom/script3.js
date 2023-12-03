//adding  a new element


// function createElement(item){

//     const li = document.createElement('li');
//     li.appendChild(document.createTextNode(item));

//     const button = document.createElement('button');
//     button.className ='remove-item btn-link text-red';

//     const icon = document.createElement('i');
//     icon.className = 'fa-solid fa-xmark';

//     button.appendChild(icon);
//     li.appendChild(button);

//     // console.log(li.innerHTML);

//     document.querySelector('.items').appendChild(li);

// }


function createElement(item){

    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));

    const button = createButton('remove-item btn-link text-red');

    li.appendChild(button);

    // console.log(li.innerHTML);

    document.querySelector('.items').appendChild(li);

}
function createButton(classes){

    const button = document.createElement('button');
    button.className = classes;
    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);
    return button;
}
function createIcon(classes){

    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}
createElement('Eggs');
createElement('cheese');