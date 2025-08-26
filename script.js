// Part one mastering Javascript basics
// Variables

let myName = "Yohannes";
const myAge = 30;
console.log("My name is " + myName + " and I am " + myAge + " years old.");

// Data types
console.log(typeof myName); // string
console.log(typeof myAge); // number

// Operators
let a = 10;
let b = 5;
console.log("Addition: " + (a + b)); // 15
console.log("Subtraction: " + (a - b)); // 5

// Conditionals
if (myAge < 18) {
    console.log(myName + " is a minor.");
} else {
    console.log(myName + " is an adult.");
}

// Part two JavaScript functions
// Functions

// A function that greets users
function greetUser(name) {
    console.log("Hello, " + name + "!");
}
greetUser("Yohannes");

// A function that sums two numbers
function addNumbers(x, y) {
    return x + y;
}
console.log("The Sum of 3 and 7 is: " + addNumbers(3, 7)); // 10

// An arrow function
const checkEvenOdd = (num) => {
    if (num % 2 === 0) {
        console.log(num + " is even.");
    } else {
        console.log(num + " is odd.");
    }
};
checkEvenOdd(4);
checkEvenOdd(7);

// Part three Javascript loops

// A for loop
for (let i = 1; i <= 5; i++) {
    console.log("Counting with for loop: " + i);
}

// A while loop
let j = 1;
while (j <= 5) {
    console.log("Counting with while loop: " + j);
    j++;
}
