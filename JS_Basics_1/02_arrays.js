
const marvel_heros = ["thor", "Ironman", "spiderman"];

const dc_heros = ["superman", "flash", "batman"];


// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log("marvel_heros.length :-> ", marvel_heros.length);

// console.log(marvel_heros[3][1]);

// const all_heros = marvel_heros.concat(dc_heros);
// console.log(all_heros);


// spread
const all_new_heros = [...marvel_heros, ...dc_heros];

// console.log(all_new_heros);


/*  const another_array = [1, 2, 3, [4, 5, 7], 7, [6, 7, [4, 5]]];

    const real_another_arryay = another_array.flat(Infinity);

    console.log(real_another_arryay);
*/

console.log(Array.isArray(all_new_heros));
console.log(Array.isArray("Srivastav"));

console.log(Array.from("Srivastav"));

console.log(Array.from({name : "Srivastav"}));


let score1 = 100;
let score2 = 200;
let score3 = 300;

// console.log(Array.of(score1, score2, score3));

const score_array = Array.of(score1, score2, score3);
console.log(score_array);




