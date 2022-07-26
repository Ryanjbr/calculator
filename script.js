const add = function(x, y) {
	return +x + +y;
};

const subtract = function(x, y) {
	return +x - +y;
};

const multiply = function(x, y) {
    return +x * +y;
}

const divide = function(x, y) {
    if (+y === 0) {
        alert("You have summoned the eldritch terrors. Repent.");
        reset();
        return;
    }
    return +x / +y;
}

function display(result) {
    if (+result !== Math.floor(+result)) {
        result = Math.round(+result * 100000000000) / 100000000000;
    }
    if (Number.isFinite(+result) === false) {
        result = 0;
    }
    const display = document.querySelector('.display');
    display.textContent = result;
}

function reset() {
    display(0);
    currentResult = 0;
    currentNumber = 0;
    currentOperator = '';
}

const operate = function(operator, x, y) {
    if (operator === '+') {
        return(add(x, y))
    }
    else if (operator === '-') {
        return(subtract(x, y))
    }
    else if (operator === '*') {
        return(multiply(x, y))
    }
    else if (operator === '/') {
        return(divide(x, y))
    }
}

function calculate() {
    if (currentOperator === '') {
        currentResult = currentNumber;
        return currentNumber;
    }
    else {
        currentResult = operate(currentOperator, currentResult, currentNumber)
        return currentResult;
    };
}



const numbers = document.querySelectorAll('.number');
let currentNumber = "";


for (let number of numbers) {
    number.addEventListener('click', () => {
        currentNumber = currentNumber.concat(number.innerHTML)
        display(currentNumber);
    });
}

const operators = document.querySelectorAll('.operator')
let currentResult = 0;
let currentOperator = '';

for(let operator of operators) {
    operator.addEventListener('click', () => {
        console.log(currentOperator)
        display(calculate());
        currentOperator = operator.innerHTML;
        currentNumber = '';
    });
}

let equals = document.querySelector('.equals')

equals.addEventListener('click', () => {
    if (calculate() === '') {
        display(0);
    }
    else {
        display(calculate());
    }
    currentNumber = 0;
    currentOperator = '';
    currentResult = 0;
});

let clear = document.querySelector(".clear")

clear.addEventListener("click", () => {
    reset()
});

