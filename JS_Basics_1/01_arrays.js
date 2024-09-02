// array

const myArr = [0, 1, 2, 3, 4, true, "Srivastav"];

// console.log(myArr[6]);

// second way to decalred array
const  myArr1 = new Array(1, 2, 343, 5);


// Array methods
myArr1.push(6);


myArr1.unshift(9);
// 9, 1, 2, 343, 5, 6
// console.log(myArr1);

myArr1.shift();
// 1, 2, 343, 5, 6
// console.log(myArr1);

// console.log(myArr1.includes(10));
// console.log(myArr1.includes(2));


/* console.log(myArr1.indexOf(45));
console.log(myArr1.indexOf(343)); */


/* const newArr = myArr1.join();
console.log(myArr1);
console.log(newArr);

console.log(typeof newArr); */


// slice, splice method
// 1, 2, 343, 5, 6

// console.log("A ", myArr1);

const myn1 = myArr1.slice(1, 3);

console.log(myn1);
console.log("B ", myArr1);

// Splice method
// 1, 2, 343, 5, 6
const myn2 = myArr1.splice(1, 3);

console.log(myn2);
console.log("C ", myArr1);