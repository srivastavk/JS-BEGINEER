// ****** Arrow Function ******


/* 
    const user = {
        username : "srivastav",

        price : 999,

        welcomeMessage : function()
        {
            console.log(`${this.username}, welcome to website`);
            console.log(this);
        }
    } 
*/

/* 
    user["welcomeMessage"]();

    user.username = "Sam";
    user.welcomeMessage();

    console.log(this);
*/


/* 
    function func1()
    {
        const username = "sam";
        // console.log(this);

        // this keyword work only inside the object not functions
        console.log(this.username);
    }

    func1(); 
*/

// ************* Arrow Function ***********


/* 
    const user = () => {
        let username = "srivastav";
        console.log(this.username);
        console.log(this);
    }

    user(); 
*/

/* 
    // *** Basic Arrow Function ***    

    const addTwoNumber = (num1, num2) =>{
        return num1 + num2;
    }

    console.log(addTwoNumber(9, 4)); 
*/

// Implicit return :-> Arrow function

/* 
    const addTwoNumber = (num1, num2) => (num1 + num2);

    console.log(addTwoNumber(9, 9)); 
*/

/* 
    // return object in arrow function

    const addTwoNumber = (num1, num2) => ({username : "abce"});

    console.log(addTwoNumber(9, 9));  
*/

