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
    return +x / +y;
}

const sum = function(array) {
  let sum = 0;
	for(let element of array) {
    sum += +element;
  }
  return sum;
};

const power = function(base, exponent) {
  let result = base;
	for(let i = 1; i < exponent; i++) {
    result = result * base;
  }
  return result;
};

const factorial = function(x) {
	if (x === 0) {
    return 1;
  }
  else {
    let result = 1;
    for (let i = x; i > 0; i--) {
      result = result * i;
      console.log(result)
    }
    return result;
  };
};

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

function display(result) {
    const display = document.querySelector('.display');
    display.textContent = result;
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
    display(calculate());
    currentNumber = '';
    currentOperator = '';
    currentResult = 0;
});

let clear = document.querySelector(".clear")

clear.addEventListener("click", () => {
    display(0);
    currentResult = 0;
    currentNumber = '';
    currentOperator = '';
});

