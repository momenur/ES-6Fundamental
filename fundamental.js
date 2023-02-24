/*
================ Template String ===================
1.1:  Create Multi-Line String (` `)
*/
const newString = `I am Momenur islam Pronif,
i am a web developer.
I am interested to it.
`
console.log(newString);

// 1.2:  Add Dynamic Variable (Expression) : `${Your Dynamic Variable}`
const age = 23 ;
const sentence = `My age is ${age}`;
console.log(sentence);





/*
================ Arrow Function ==================
1.1: Single Parameter Arrow Function.
*/
const dauble = dauble => dauble * 2;
console.log(dauble(10));

// 1.2: Two Parameter Arrow Function.
const sum = (num1, num2) => num1 + num2 ;
console.log(sum(20, 30));

// 1.3: Arrow Function With Function Body. And Don't Forget you have to return explicity.

const sumThenDouble = (num1, num2) =>{
    const sum = num1 + num2 ;
    const double = sum * 2;
    return double;
}
console.log(sumThenDouble(2, 3));


 
/*================ Map ==================
    => map only apply on array , it make new array and can't modify the old array .
*/
// 1.1:
const numbers = [2, 4, 6, 3, 10];
const makeDouble = numbers.map(num => num * 2);
console.log(makeDouble);

//1.2: Map apply on string array
const friends = ['Momen', 'Somrat', 'Sajal', 'Hasan', 'Humayon']; 
const stringLength = friends.map(f => f.length);
console.log(stringLength);

//1.3: Map apply on object array
const products = [
    {id:1, name:'Leptop', Price:'90000'},
    {id:2, name:'Iphone', Price:'150000'},
    {id:3, name:'TV', Price:'50000'},
    {id:4, name:'Power bank', Price:'5000'},
    {id:5, name:'Mouse', Price:'2000'}
]
const productName = products.map(p => p.name);
console.log(productName);


/*================ Filter ==================
    => Filter only apply on array , it make new array and can't modify the old array. 
*/
// 1.1:
const allNumbers = [20, 30, 40, 50, 25, 23, 33];
const evenNumbers = allNumbers.filter(x => x % 2 == 0);
console.log(evenNumbers);
const bigNumbers = allNumbers.filter(x => x > 35);
console.log(bigNumbers);

//1.2: Filter Apply an Array of Object.
const phones = [
    {name: 'iPhone', RAR: '4GB', price: 150000},
    {name: 'Onepluse', RAR: '8GB', price: 98000},
    {name: 'Smasune', RAR: '6GB', price: 10000},
    {name: 'Semphony', RAR: '2GB', price: 5000}
]
const expensive = phones.filter(phone => phone.price > 80000);
console.log(expensive);


/*================ Find ==================
    => Find only apply on array , it Return a value dependents your conditions ant return the first element. 
*/
//1.1:
const moreNumbers = [20, 30, 40, 50, 21];
const findNumber = moreNumbers.find (num => num % 5 === 1);
console.log(findNumber);