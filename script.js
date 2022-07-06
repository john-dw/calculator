function add(nbr1, nbr2) {
    return nbr1 + nbr2;
}

function substract(nbr1, nbr2) {
    return nbr1 - nbr2;
}

function multiply(nbr1, nbr2) {
    return nbr1 * nbr2;
}

function divide(nbr1, nbr2) {
    return nbr1 / nbr2;
}

function operate(operator, nbr1, nbr2) {
    switch(operator) {
        case "add": display.textContent = `${add(nbr1, nbr2)}`;
        break;
        case "substract": display.textContent = substract(nbr1, nbr2);
        break;
        case "multiply": display.textContent = multiply(nbr1, nbr2);
        break;
        case "divide": display.textContent = divide(nbr1, nbr2);
        break;
        default: display.textContent = "Error";
    }
}

const display = document.querySelector("#display");
const btn = document.querySelectorAll("button");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const clear = document.querySelector("#clear");
const negative = document.querySelector("#negative");
const percentage = document.querySelector("#percentage");
const equal = document.querySelector("#equal");
const float = document.querySelector("#float");

/*
eventlistener on numbers
eachtime add number to screen
eventlistener on operators
when operator clicked, need to store number on screen, reinitialize it to 0 for next number
when one number stored, one operator stored, 2nd number on screen and other operator or equal clicked,
call operator functions, show result on screen, wait for other operator and next number
*/

let nbr1 = 0;
let nbr2 = 0;
let operatorEntered = "";
let operatorActivated = false;

function addToScreen(number) {
    if(display.textContent === "0" || display.textContent === "Error") {
        display.textContent = "";
    }
    display.textContent += `${number}`; 
}

numbers.forEach((number) => {
    number.addEventListener("click", (e) => {
        if (operatorActivated) {
            display.textContent = "";
            operatorActivated = false;
        }
        addToScreen(number.id);
    })
})

operators.forEach((operator) => {
    operator.addEventListener("click", (e) => {
        if(operatorEntered) {
            getResult();
        }
        operatorEntered = `${operator.id}`;
        operatorActivated = true;
        nbr1 = parseFloat(display.textContent);
    })
})

function getResult() {
    nbr2 = parseFloat(display.textContent);
    operate(operatorEntered, nbr1, nbr2);
    nbr1 = parseFloat(display.textContent);
    nbr2 = 0;
    operatorEntered = "";
}

equal.addEventListener("click", (e) => {
    getResult();
})

clear.addEventListener("click", (e) => {
    nbr1 = 0;
    nbr2 = 0;
    operatorEntered = "";
    display.textContent = "0";
})

negative.addEventListener("click", (e) => {
    display.textContent = `${parseFloat(display.textContent) * -1}`;
})

percentage.addEventListener("click", (e) => {
    display.textContent = `${parseFloat(display.textContent) / 100}`;
})

float.addEventListener("click", (e) => {
    if (!display.textContent.includes(".")) {
        display.textContent += ".";
    }
})