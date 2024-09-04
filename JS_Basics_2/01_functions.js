// Function

/* function sayMyName()
{
    console.log("abcde");;
}

sayMyName(); */


/* function addTwoNumbers(number1, number2)
{
    // console.log(number1+number2)
    return number1 + number2;
}

console.log(addTwoNumbers(3, 4)); */

// function loginUserMessage(username = "sam")
// {
//     if(/* !username */username === undefined)
//     {
//         console.log("Please enter a username");
//         return;
//     }
//     return `${username} just logged in`;
// }

/* console.log(loginUserMessage("Srivastav"));
console.log(loginUserMessage()); */

// ... rest operator or spread operator

/* function calculateCartPrice(...num1)
{
    return num1;
}

console.log(calculateCartPrice(2, 3, 4)); */



/* function calculateCartPrice(val1, val2, ...num1)
{
    return num1;
}

console.log(calculateCartPrice(2, 3, 4, 9)); */



/* const user = {
    username : "Srivastav", 
    price : 199
}

function handleObject(anyObject)
{
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(
    {
        username : "sam",
        price : "99"
    }
); */


const myNewArray = [200, 400, 100, 600];


function returnSecondValue(getArray)
{
    return getArray[1];
}

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([99, 999, 9999, 99999]));


