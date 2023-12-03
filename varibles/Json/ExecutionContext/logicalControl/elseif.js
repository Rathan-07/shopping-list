const d = new Date(10,30,2022,21,0,0);

const hour = d.getHours();

if(hour<12)
{
    console.log('good mrg');
    
}
else if(hour<18)
{
    console.log('good afternoon');
}
else 
{
    if(hour>20)
    {
        console.log('wake up');
    }
    console.log('good night');
}