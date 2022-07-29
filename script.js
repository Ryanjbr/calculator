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
        return '0';
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
    display('0');
    currentResult = '0';
    currentNumber = '';
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
        return currentResult;
    }
    else {
        currentResult = operate(currentOperator, currentResult, currentNumber)
        console.log(currentOperator, currentResult, currentNumber)
        return currentResult;
    };
}



const numbers = document.querySelectorAll('.number');
let currentNumber = '';


for (let number of numbers) {
    number.addEventListener('click', () => {
        if (currentNumber === currentResult) {
            currentNumber = ''
        }
        if (currentNumber.length < 10) {
            currentNumber = currentNumber.concat(number.innerHTML)
            display(currentNumber);
        }
    });
    window.addEventListener('keydown', (e) => {
        if (e['key'] === number.innerHTML) {
            if (currentNumber === currentResult) {
                currentNumber = ''
            }
            if (currentNumber.length < 10) {
                currentNumber = currentNumber.concat(number.innerHTML)
                display(currentNumber);
            }
        }
    }); 
}

const backspace = document.querySelector('.backspace')

backspace.addEventListener('click', () => {
    currentNumber = currentNumber.slice(0, -1);
    display(currentNumber);
    display('0');
});
window.addEventListener('keydown', (e) => {
    if (e['key'] === 'Backspace') {
        currentNumber = currentNumber.slice(0, -1);
        display(currentNumber);
    }
}); 

const decimal = document.querySelector('.decimal');
decimal.addEventListener('click', () => {
    if (currentNumber.includes('.') === false) {
        if (currentNumber.length < 10) {
            currentNumber = currentNumber.concat('.')
            display(currentNumber)
        }
    }
})

const operators = document.querySelectorAll('.operator')
let currentResult = 0;
let currentOperator = '';

for(let operator of operators) {
    operator.addEventListener('click', () => {
        console.log(currentOperator)
        display(calculate().toString().slice(0, 10));
        currentOperator = operator.innerHTML;
        currentNumber = '';
    });
    window.addEventListener('keydown', (e) => {
        if (e['key'] === operator.innerHTML) {
            display(calculate());
            currentOperator = operator.innerHTML;
            currentNumber = '';
        }
    }); 
}

let equals = document.querySelector('.equals')

equals.addEventListener('click', () => {
    if (currentNumber !== currentResult) {
        display(calculate());
        currentNumber = currentResult;
        currentOperator = '';
    };
});

window.addEventListener('keydown', (e) => {
    if (e['key'] === '=' || e['key'] === 'Enter') {
        if (currentNumber !== currentResult) {
            display(calculate());
            currentNumber = currentResult;
            currentOperator = '';
        };
    }
}); 

let clear = document.querySelector(".clear")

clear.addEventListener("click", () => {
    reset()
});

