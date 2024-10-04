// Promises

// const promiseOne = new Promise((resolve, reject) =>{
//     // Do an async task
//     // DB calls, cryptography, network

//     setTimeout(()=>{
//         console.log('Async tak is complete');
//         resolve();
//     }, 1000)
// });


// promiseOne.then(()=>{
//     console.log("Promise comsumed");
// });


// new Promise((resolve, reject) =>{
//     setTimeout(() =>{
//         console.log("Async task 2")
//         resolve();
//     }, 1000)
// }).then(()=>{
//     console.log("Async 2 resolve");
// })


// const promiseThree = new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         resolve(
//             {username : "Chai", email : "chai@example.com"}
//         );
//     }, 1000);
// });

// promiseThree.then((user) =>{
//     console.log(user);
// })


/*  
    const promiseFour = new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = false;
            if (!error) {
                resolve({ username: "Srivastav", password: "123" });
            }
            else {
                reject("ERROR : Something went wrong");
            }
        }, 1000);
    });

    promiseFour.then((user) => {
        console.log(user);
        return user.username;
    }).then((userName) => {
        console.log(userName);
    }).catch((error) => {
        console.log(error);
    }).finally(()=>{
        console.log("The promise is either resolved and reject");
    }) 
*/

/*  
    const promiseFive = new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = true;
            !error ? resolve({ username: "javascript", password: "1234" }) : reject("ERROR : JS went wrong");
        }, 1000);
    });

    async function consumePromiseFive() {
        // const response = await promiseFive;
        // console.log(response);

        try {
            const response = await promiseFive;
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    consumePromiseFive(); 
*/

/*  
    async function getAllUsers() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log("E : ", error);
        }
    }
 
    getAllUsers(); 
*/

fetch('https://jsonplaceholder.typicode.com/users').then((response) =>{
    return response.json();
}).then((data) =>{
    console.log(data);
}).catch((error) =>{
    console.log(error);
});
