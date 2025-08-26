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

// Foreach loop
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num) => {
    console.log("Counting with foreach loop: " + num);
});

//Part four Mastering the DOM
// interactive buttons used to change the background color
const yellowBtn = document.getElementById("myyellowButton");
yellowBtn.addEventListener("click", () => {
    document.body.style.backgroundColor = "yellow";
});

const blueBtn = document.getElementById("myblueButton");
blueBtn.addEventListener("click", () => {
    document.body.style.backgroundColor = "blue";
});

const greenBtn = document.getElementById("mygreenButton");
greenBtn.addEventListener("click", () => {
    document.body.style.backgroundColor = "green";
});

// Interactive buttons used to change the font of the paragraph
const paragraph = document.getElementById("myParagraph");
const boldBtn = document.getElementById("myboldfontbutton");
boldBtn.addEventListener("click", () => {
    paragraph.style.fontStyle = "bold";
    paragraph.style.fontWeight = "bold";
});

const normalBtn = document.getElementById("mynormalfontbutton");
normalBtn.addEventListener("click", () => {
    paragraph.style.fontWeight = "normal";
    paragraph.style.fontStyle = "normal";
});

const italicBtn = document.getElementById("myitalicfontbutton");
italicBtn.addEventListener("click", () => {
    paragraph.style.fontStyle = "italic";
    paragraph.style.fontWeight = "normal";
});

// using the DOM to add and remove items from the list

const myList = document.getElementById("myList");

// Adding list items to my existing list
function addListItem(text) {
    // Create a new list item
    const newItem = document.createElement("li");
    // Set the text content
    newItem.textContent = text;
    // Append the new item to the list
    myList.appendChild(newItem);
}
addListItem("Item 5");
addListItem("Item 6");
addListItem("Item 7");

// removing list item using its index
function removeListItem(index) {
    // grabbing all list items
    const items = myList.getElementsByTagName("li");
    // checking if the index is valid
    if (index >=0 && index < items.length) {
        // removing the item
        myList.removeChild(items[index]);
    }
}
removeListItem(2);

// removing list items using the text
function removeItemByText(text) {
    // grabbing all list items
    const items = myList.getElementsByTagName("li");
    // looping through the list items
    for (let i = 0; i < items.length; i++) {
        //checking if the current item's text matches the text to remove
        if(items[i].textContent === text) {
            // remove the item
            myList.removeChild(items[i]);
            break; // Stop the loop once the item is found and removed
        }
    }
}

removeItemByText("Item 7");