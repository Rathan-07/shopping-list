//  function onClear(){
//      alert('hi');
//  }

// const clearBtn = document.querySelector('#clear');

// clearBtn.onclick = function(){
//     alert('clear Items');
// }




// clearBtn.addEventListener('click',function(){

//     alert('Clear Items');
// });




//addEventListener()
// clearBtn.addEventListener('click',() => alert('Clear Items'));



// clearBtn.addEventListener('click',onClear);


// setTimeout(()=>clearBtn.click(),5000);




const clearBtn = document.querySelector('#clear');

function onClear(){


    const itemList = document.querySelector('ul');
    const items = itemList.querySelector('li');
    //  itemList.innerHTML = ' ';


    // items.forEach((item)=> item.remove());

    while(itemList.firstChild){

        itemList.removeChild(itemList.firstChild);
    }
}