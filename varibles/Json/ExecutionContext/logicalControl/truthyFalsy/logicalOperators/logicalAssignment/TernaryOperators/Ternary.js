const age = 13;

age >=18 ? console.log("you can exist") : console.log("no");


//Assigning a conditional value to variable

const vote = age >= 12 ? true : false;

console.log(vote);



// const auth = false;
// let redirect;

// if(auth)
// {
//     alert('welcome to the dashboard');
//     redirect = '/dashboard';

// }
// else
// {
//     alert('Access Denied');
//     redirect = '/login';
// }
// console.log(redirect);


// const redirect1= auth 
  
//   ? (alert('Welcome to the dashboard'),'/dashboard') : (alert('Access Denied'),'/login');

//   console.log(redirect1);

const auth = true;


  const redirect =auth && console.log('welcome to the dashboard');
    
  console.log(redirect);