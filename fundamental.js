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
 