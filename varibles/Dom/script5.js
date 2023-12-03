function replaceFirstItem(){

    const FirstItem = document.querySelector('li:first-child(1)');
    li.textContent = 'Replaced First';
    
    FirstItem.replace(li);
}
replaceFirstItem();



function replaceSecondItem(){

    const replaceSecondItem = document.querySelector('li:nth-child(2)');

    replaceSecondItem.outerHTML ='<li>Replaced Second</li>';

}
replaceSecondItem();


function replaceAllItems(){



    const lis = document.querySelectorAll('li');

    // lis.forEach((item,index)=>{

    //     // item.outerHTML = '<li>Replaced Second</li>';
    //     item.innerHTML ='Replace All';
    // });


    lis.forEach((item,index)=>
   ( item.outerHTML=(index===1) ? '<li>replace second': '<li>item</li>')
    );  


}
replaceAllItems();

function replaceHeader(){

    const header = document.querySelector('header');
    const h1 = document.querySelector('h1');
    const h2 = document.createElement('h2');
    h2.id = 'app-title';
    h2.textContent = 'Shopping List';
    header.replaceChild(h2.h1);
}

replaceHeader();