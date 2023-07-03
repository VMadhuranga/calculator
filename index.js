let display = document.querySelector(".display");
let buttons = [...document.querySelectorAll(".btn")];

// create variable for first number, second number and operator
let firstNumber = 0;
let secondNumber = 0;
let operator = "";

buttons.forEach((button) => {

    // populate the display when number button clicks
    if (button.classList[1] === "number") {
        button.addEventListener("click", () => {
            display.textContent += button.textContent;
        });
    }

    // select operator and store first number
    if (button.classList[1] === "operator") {
        button.addEventListener("click", () => {
            operator = button.textContent;
            firstNumber = Number(display.textContent);
            display.textContent = "";
        });
    }

    // store second number and call function operate
    if (button.classList[1] === "equation") {
        button.addEventListener("click", () => {
            secondNumber = Number(display.textContent);
            display.textContent = operate(firstNumber, secondNumber, operator);
        });
    }

    // clear all data
    if (button.classList[1] === "clear") {
        button.addEventListener("click", () => {
            display.textContent = "";
            firstNumber = 0;
            secondNumber = 0;
            operator = "";
        });
    }

    // delete last item
    if (button.classList[1] === "delete") {
        button.addEventListener("click", () => {
            display.textContent = display.textContent.slice(0, -1);
        });
    }

});

// create function operate and call relevant math operation functions based on operator
function operate(firstNumber, secondNumber, operator) {
    if (operator === "+") {
        return add(firstNumber, secondNumber);
    } if (operator === "-") {
        return subtract(firstNumber, secondNumber);
    } if (operator === "*") {
        return multiply(firstNumber, secondNumber);
    } if (operator === "/") {
        return divide(firstNumber, secondNumber);
    }
}

// create functions for basic math operation
function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}