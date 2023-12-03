// const d = new Date(2022,4,10,8,0,0);
// const month = d.getMonth();

// switch(month)
// {

//     case 1:
//         console.log("it is january");
//         break;
//     case 2:
//         console.log("it is february");
//         break;

//     case 3:

//         console.log("it is march");
//         break;
//     default:
//         console.log("none");
// }
// const hour = d.getHours();

// switch(true){

//     case hour <12:
//     console.log('Good morning');
//     break;

//     case hour<18:
//     console.log("good afternoon");
//     break;

//     default:
//         console.log('good night');
// }





function calculator(num1,num2,operator)
{
    let res;
    switch(operator)
    {
        case '+':
             res = num1+num2;
             break;
        case '-':
            res = num1-num2;

        default:
            res = "ivalid";

            
    }
    console.log(res);
    return res;
}

 calculator(3,5,'*');
