function first()
{
    const x = 100;
    

    function second(){

        const y = 200;
        console.log(x+y);
    }
  second();

}
first();

//child scope cannot be accesed outside


if(true)
{
    const x = 100;
    if(x===100)
    {
        const y = 200;
        console.log(x+y);
    }
    console.log(x);
}

//we can use parent type var inside child block but child block var we cant use outside