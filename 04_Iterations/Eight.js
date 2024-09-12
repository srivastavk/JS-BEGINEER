// JavaScript Demo : Array.reduce()


const myNums = [1, 2, 3];

const myTotal = myNums.reduce(function(acc, currval)
{
    console.log(`acc : ${acc} and currval : ${currval}`);
    return acc + currval;
}, 0)

// console.log(myTotal);






const array1 = [1, 2, 3, 4];

const initialValue = 0;

const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
);

// console.log(sumWithInitial);
// Expected Output :-> 10;


const shoppingCart = [
    {
        itemName : "Js Course", 
        price : 2999
    },
    {
        itemName : "Py Course", 
        price : 999
    },
    {
        itemName : "Android Course", 
        price : 5999
    },
    {
        itemName : "data science Course", 
        price : 12999
    }
]

const priceToPay = shoppingCart.reduce((acc, item) => acc+item.price, 0);

console.log(priceToPay);