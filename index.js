let display = document.querySelector(".display");
let buttons = [...document.querySelectorAll(".btn")];

let firstNumber = null;
let secondNumber = null;
let currentOperator = "";
let operator = "";

buttons.forEach((button) => {
    // populate the display when number button clicks
    if (button.classList[1] === "number") {
        button.addEventListener("click", () => {
            if (display.textContent.length < 7) {
                display.textContent += button.textContent;
            }
        });
    }

    // select operator, store values
    if (button.classList[1] === "operator") {
        button.addEventListener("click", () => {
            if (firstNumber !== null) {
                firstNumber = Number(display.textContent);
                operator = button.textContent;
            } else {
                secondNumber = Number(display.textContent);
                currentOperator = button.textContent;
            }
            if (firstNumber, secondNumber) {
                firstNumber = Number(operate(firstNumber, secondNumber, operator));
                operator = currentOperator;
            }
            display.textContent = "";
        });
    }

    // store second number and call function operate
    if (button.classList[1] === "equation") {
        button.addEventListener("click", () => {
            secondNumber = Number(display.textContent);
            display.textContent = operate(firstNumber, secondNumber, operator);
            firstNumber = null;
            secondNumber = null;
            operator = "";
            currentOperator = "";

            // round numbers if display text content greater than 7
            if (display.textContent.length > 7) {
                display.textContent = Math.round(Number(display.textContent) * 10000) / 10000;
            }
            if (Number(display.textContent) > 9999999) {
                display.textContent = "ERRrrr";
            }
        });
    }

    // clear all data
    if (button.classList[1] === "clear") {
        button.addEventListener("click", () => {
            display.textContent = "";
            firstNumber = null;
            secondNumber = null;
            currentValue = null;
            operator = "";
        });
    }

    // delete last item
    if (button.classList[1] === "delete") {
        button.addEventListener("click", () => {
            display.textContent = display.textContent.slice(0, -1);
        });
    }

    // check for decimal
    if (button.classList[1] === "decimal") {
        button.addEventListener("click", () => {
            if (!display.textContent.includes(".") && display.textContent.length >= 1) {
                display.textContent += button.textContent;
            }
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
    // handle divide by 0
    if (firstNumber / secondNumber === Infinity) {
        return display.textContent = '0';
    }
    return firstNumber / secondNumber;
}