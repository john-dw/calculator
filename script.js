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
        case "add": return add(nbr1, nbr2);
        case "substract": return substract(nbr1, nbr2);
        case "multiply": return multiply(nbr1, nbr2);
        case "divide": return divide(nbr1, nbr2);
        default: return "Error: please enter a valid operation";
    }
}

const display = document.querySelector("#display");
const btn = document.querySelectorAll("button");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const clear = document.querySelector("#clear");
const negative = document.querySelector("#negative");
const percentage = document.querySelector("#percentage");

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

function addToScreen(number) {
    display.textContent += `${number}`; 
}

numbers.forEach((number) => {
    number.addEventListener("click", (e) => {
        addToScreen(number.id);
        nbr1 = nbr1 * 10 + parseInt(number.id);
    })
})

operators.forEach((operator) => {
    operator.addEventListener("click", (e) => {
        operatorEntered = `${operator.id}`;
    })
})

clear.addEventListener("click", (e) => {
    nbr1 = 0;
    nbr2 = 0;
    operatorEntered = "";
    display.textContent = "0";
})

negative.addEventListener("click", (e) => {

})

percentage.addEventListener("click", (e) => {
    
})