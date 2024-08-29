const name = "Srivatav";

const repoCount = 50;

// console.log(name + repoCount + "Value");

// String Interpolation
// console.log(`Hello my is ${name} and my repo count is ${repoCount}`);

// Another way to decalred string
const gameName = new String("Chess-Game");

// console.log(typeof gameName);

// console.log(gameName[0]);

// console.log(gameName.__proto__);



/* ********predefined method of string********  */
// console.log(gameName.length);

// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2));

// console.log(gameName.indexOf('e'));

// find Sub-string inside string.
// const newString = gameName.substring(0, 8);
// console.log(newString);

// slice method :-> find sub-string reverse order.
/* const anotherString = gameName.slice(-7, 10);
console.log(anotherString); */

// trim() method :-> trime method remove extra white spaces.
/* const newStringOne = " Srivastav   ";

console.log(newStringOne.trim()); */


const url = "https://xyz.com/xyz%20abcd";

console.log(url.replace('%20', '-'));

console.log(url.includes('xyz'));


const biodata = "srivastav Kumar - Bihar - Banka - 813109";

console.log(biodata.split('-'));