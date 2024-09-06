
// Immediately Invoked Function Expression (IIFE)

// Name iife
(function func1() {
    console.log(`DB CONNECTED`);
})();

// Arrow function

// un-name iife
/* (
    () =>{
        console.log(`DB CONNECTED TWO`);
    }
)()
 */


(
    (name) => {
        console.log(`DB CONNECTED TWO ${name}`);
    }
)('Srivastav')