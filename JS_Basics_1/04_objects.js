// const tinderUser = {}  


// Oject singleton

const tinderUser = new Object();


tinderUser.id = "234abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);


const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname :{
            firstname : "Srivastav",
            lastname : "Kumar"
        }
    }
}

/* console.log(regularUser["fullname"]);
console.log(regularUser.fullname); */

// console.log(regularUser.fullname.userfullname.firstname);
// console.log(regularUser.fullname.userfullname.lastname);


const obj1 = {
    1 : "a",
    2 : "b"
}

const obj2 = {
    3 : "a",
    4 : "b"
}

/* const obj3 = {obj1, obj2};
console.log(obj3); */

//                         target, source  
// const obj3 = Object.assign({}, obj1, obj2);


/* const obj3 = {...obj1, ...obj2};
console.log(obj3); */


// when value comming from database

const users  = [
    {
        id : 1,
        email : "sri2343@gmail.com"
    },

    {
        id : 1,
        email : "sri2343@gmail.com"
    },
]

// console.log(users[1].email);

/* console.log(tinderUser);

console.log(Object.keys(tinderUser));   // dout

console.log(Object.values(tinderUser)); */

// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));



const course = {
    coursname : "js in hindi",
    price : "999",
    courseInstructor : "hitesh"
}


// console.courseInstructor;

// ****** Object De-Structure *******

// const {courseInstructor} = course;
// console.log(courseInstructor);

/* const {courseInstructor : instructor} = course;
console.log(instructor); */




// JSON

/* 
    {
        "name" : "srivastav", 
        "course" : "js in Hindi", 
        "price" : "free"
    } 
*/

// JSON Array format
/*
    [
      {}, {}
    ] 
*/