/* const userEmail = "srivastav0234@gmail.com";

if(userEmail)
{
    console.log("Got user email");
}
else{
    console.log("Don't have user email");
} */


/*
    falsy values 
    false, 0, -0, BitInt 0n, "", null, undefined, Nan
*/

/*
    truthy values
    "0", 'false', " ", [], {}, function(), 

*/

/* const arr = [];
if(arr.length === 0)
{
    console.log("Array is empty");
}


const emptyObj = {};
if(Object.keys(emptyObj).length === 0)
{
    console.log("Object is emtpyt");
} */


// Nullish Coalescing Operator (??) : null, undefined

// let val1;
// val1 = 5 ?? 10;
// console.log(val1);

// val = null ?? 10;
// console.log(val);

/* val1 = undefined ?? 15;
console.log(val1); */

// val = undefined ?? 5?? 6;
// output :-> 5;

// Turnary Operator :-> 
// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice>=80?console.log("Greater than 80"):console.log('less than 80');