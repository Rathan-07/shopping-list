function removeClearButthon(){

    const clearBtn = document.querySelector('#clear');
    clearBtn.remove();

}
// removeClearButthon();

function  removeFirstItem(){

    const ul = document.querySelector('ul');
    const li = document.querySelector('li:first-child(1)');
    ul.removeChild(li);
}
// removeFirstItem();

function removeItem(itemNumber){

    const ul = document.querySelector('ul');
    const li = document.querySelectorAll('li')[itemNumber-1];
    ul.removeChild(li);



}

const removeItem1 = (itemNumber) => document.querySelectorAll('li')
[itemNumber-1].remove();

removeItem1(2) ;