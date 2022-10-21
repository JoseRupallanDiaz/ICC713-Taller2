let firstValue = "";
let secondValue = "";
let operator = "";
let resultValue = 0;
let displayedValues = "";
let equalPressed = false;

function setResult() {
    console.log("imprimiendo resultado...")
    const resultBody = document.getElementById("result");
    resultBody.innerHTML = resultValue;
}

function updateDisplay() {
    const resultBody = document.getElementById("current-function");
    resultBody.innerHTML = firstValue.toString() + " " + operator.toString() + " " + secondValue.toString();
}

function clearAll() {
    resultValue = 0;
    firstValue = "";
    secondValue = "";
    operator = "";
    displayedValues = "";
    setResult();
    updateDisplay();
}

function setNumber(number) {
    equalPressed = false;
        if (resultValue !== 0) {
            clearAll();
        }
        if (operator === "") {
            if (firstValue === "") {
                firstValue = number;
            } else {
                firstValue = firstValue + number.toString();
            }
        } else {
            if (secondValue === "") {
                secondValue = number;
            } else {
                secondValue = secondValue + number.toString();
            }
        }
        updateDisplay();
}

function setOperator(symbol) {
    equalPressed = false;
    if (operator !== "") {
        doOperation();
        let aux = resultValue;
        clearAll();
        firstValue = aux;
        resultValue = aux;
        operator = symbol;
        setResult();
        updateDisplay();
    }
    if (firstValue !== "") {
        operator = symbol;
        if (resultValue !== 0) {
            firstValue = resultValue;
            resultValue = 0;
            secondValue = "";
        }
        updateDisplay();
    } else {
        const resultBody = document.getElementById("current-function");
        resultBody.innerHTML = "Debe ingresar un numero antes que una operación.";
    }
}

function doOperation() {
    if (equalPressed) {
        firstValue = resultValue;
        updateDisplay();
    }
    if (secondValue === "") {
        resultValue = firstValue;
        updateDisplay();
    }
    switch (operator) {
        case "+":
            console.log("suma");
            resultValue = Number(firstValue) + Number(secondValue);
            break;
        case "-":
            console.log("resta");
            resultValue = Number(firstValue) - Number(secondValue);
            break;
        case "x":
            console.log("multiplicacion");
            resultValue = Number(firstValue) * Number(secondValue);
            break;
        case "/":
            console.log("division");
            resultValue = Number(firstValue) / Number(secondValue);
            break;
    }
    setResult();
    equalPressed = true;
}
