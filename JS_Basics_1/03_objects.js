// Objects

// singleton :-> constructor :-> Object.create

// object literals

/* Symbol data types */

const mySym = Symbol("key1");

const JsUser = {
    name: "Srivastav",
    "full name": "Srivastav Kumar",
    [mySym] : "mykey1",
    age: 22,
    location: "Bihar",
    email: "297srivastavKumar@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

/* 
    console.log(JsUser.email);
    console.log(JsUser["email"]);
    console.log(JsUser["full name"])
    console.log(JsUser.age)

    console.log(JsUser[mySym]);


    JsUser.email = "Srivastavkumar9999@gmail.com";
    Object.freeze(JsUser);

    JsUser.email = "srivast292@gmail.com";

    console.log(JsUser); 
*/

JsUser.greeting = function()
{
    console.log(`Hello JS user`);
}


JsUser.greetingTwo = function()
{
    console.log(`Hello JS user, ${this.name}`);
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



