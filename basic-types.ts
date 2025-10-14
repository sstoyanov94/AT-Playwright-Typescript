// let vs const
let num: number = 5;
num = 10;
num = 15;

const welcomeMsg: string = 'Welcome!'
// Cannot assign to 'WelcomeMsg' because it is constant.
// welcomeMsg = "Welcome, Peter!"

// string
let message: string = 'Hello, Peter!';

let messageLength: number = message.length;

//string interpolation
let welcomeMessageDetails: string = `Text message length is ${messageLength}`;

//number and number operations

let numOne: number = 10;
let numTwo: number = 5;

let add: number = numOne + numTwo;
let substract: number = numOne - numTwo;
let divide: number = numOne / numTwo;
let multiply: number = numOne * numTwo;

//boolean (true/false)
let areEqual:boolean = numOne === numTwo;
let isGreater: boolean = numOne > numTwo;
let isGreaterOrEqual: boolean = numOne >= numTwo;

// logical operators
let areEqualTo: boolean = numOne === 10 && numTwo === 5;
let isAnyNumEqualTo: boolean = numOne === 12 || numTwo === 5;

// Conditions

// ternary operator
let positiveNumComparison: string = numOne > 0 ? `The number is ${numOne} positive` : `The number is ${numOne} negative`;

// if/else statements

const numThree = 50;

if (numOne > 3) {
    console.log(`${numOne} is greater than 3`);
} else if (numThree > 50){
    console.log(`${numThree} is greater than 50`);  
} else {
    console.log(`${numOne} is not greater than 3`);
}  
