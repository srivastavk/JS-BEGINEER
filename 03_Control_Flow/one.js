// if

/* const isUserloggedIn = true;

const temperature = 41;
if(temperature<50)
{
   console.log("Temperature is less than 50");
}
else{
    console.log(`Temperature is less than 50`);
} */

// <, >, <=, >=, ==, !=, ===, 

/* if(2 == "2")
{
    console.log("executed");
}

if(2 === "2")
{
    console.log("executed");
} */


/* const score = 200;

if(score>100)
{
    const power = "fly";
    console.log(`User power : ${power}`);
} */

/* 
const balance = 1000;

let check_balance = balance>5000 ? `balance greater than 5000`: 'balance is less than 5000';

console.log(check_balance); */


const isUserloggedIn = true;
const debitCart = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(isUserloggedIn && debitCart)
{
    console.log("Allow to by course");
}

if(loggedInFromGoogle || loggedInFromEmail)
{
    console.log("User logged in");
}