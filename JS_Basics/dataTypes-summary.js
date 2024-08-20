/* 
   # Primitive 
   7 types : String, Number, Boolean, 
   null, undefined, Symbol, BigInt.
   
*/

const score = 100; // Number type
const scoreValue = 100.3; // Number type

const isLoggedIn = false; // Boolean type
const outsideTemperture = null; // null type

let userEmail; // undefined type

const id = Symbol('123');

const anotherId = Symbol('123');

// Note :-> id , anotherId are different;
/* 
console.log(id === anotherId);


const bigNumber = 23432432434n;

console.log(typeof bigNumber); */



/*
   # Non-Primitive (Reference) 
   // Array, Objects, Functions
*/
  
/* 
  # Java Script is dynamic typed language.
*/

// Array data-type
const heros = ["shaktiman", "Naagra", "doga"];
console.log(typeof heros);


// Objects data-type
let myObj = {
    name: "Srivastav",
    age: 22,
};
console.log(typeof myObj);


// function data-type
const myFunction = function()
{
    console.log("Hello world");
}

console.log(myFunction);
