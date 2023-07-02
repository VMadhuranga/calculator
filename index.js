// target display
let display = document.querySelector(".display");

// target number buttons
let numbers = document.querySelectorAll(".btn.number");

// target operator buttons
let operators = document.querySelectorAll(".btn.operator");

// target equal
let equal = document.querySelector(".btn.equal");

// target clear
let clear = document.querySelector(".btn.clear");

// add event listener to number buttons call function populateDisplay
numbers.forEach((number) => {
    number.addEventListener("click", populateDisplay);
});

// add event listener to operator buttons to call function selectOperator
operators.forEach((operator) => {
    operator.addEventListener("click", selectOperator);
});

// add event listener to equal button to call function equalize
equal.addEventListener("click", equalize);

// add event listener to clear button
clear.addEventListener("click", clearDisplay);

// create variable for first number, second number and operator
let firstNumber = 0;
let secondNumber = 0;
let operator = "";

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
    display.textContent += event.target.textContent;
}

// create function to select operator and store first number
function selectOperator(event) {
    operator = event.target.textContent;
    firstNumber = Number(display.textContent);
    display.textContent = "";
}

// create function to store second number and call function operate
function equalize() {
    secondNumber = Number(display.textContent);
    display.textContent = operate(firstNumber, secondNumber, operator);
}

// create function to clear display
function clearDisplay() {
    display.textContent = "";
}