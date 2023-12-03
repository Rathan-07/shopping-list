
const x = 100;//global scope
function run()
{

    const y = 9;
    console.log(x,'hi');
}

run();
function add()
{

    const x = 1;
    const y = 50;
    console.log(x + y);//variable shadowing 
}
add();