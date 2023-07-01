// target display
let display = document.querySelector(".display");
console.log(display);

// target number buttons
let buttons = document.querySelectorAll(".btn.number");
console.log(buttons);

// add event listener to buttons call function populateDisplay
buttons.forEach((button) => {
    button.addEventListener("click", populateDisplay);
});

// create variable for first number, second number and operator
let firstNumber = 0;
let secondNumber = 0;
let operator = "/";

// console.log(operate(firstNumber, secondNumber, operator));

// create function operate and call relevant function based on operator
function operate(firstNumber, secondNumber, operator) {
    if (operator === "+") {
        return add(firstNumber, secondNumber);
    } else if (operator === "-") {
        return subtract(firstNumber, secondNumber);
    } else if (operator === "*") {
        return multiply(firstNumber, secondNumber);
    } else if (operator === "/") {
        return divide(firstNumber, secondNumber);
    }
}

// create functions for basic math operation
// add
function add(num1, num2) {
    return num1 + num2;
}

// subtract
function subtract(num1, num2) {
    return num1 - num2;
}

// multiply
function multiply(num1, num2) {
    return num1 * num2;
}

// divide
function divide(num1, num2) {
    return num1 / num2;
}

// create a function that populate the display when number button clicks
function populateDisplay(event) {
    display.textContent += Number(event.target.textContent);
}