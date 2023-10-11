function addToExpression(value) {
    const inputExpression = document.getElementById("inputExpression");
    inputExpression.value += value;
    inputExpression.focus();
}

function handleEnter(event) {
    if (event.key === "Enter") {
        calculateResult();
    }
}

function calculateResult() {
    const inputExpression = document.getElementById("inputExpression");
    const resultDisplay = document.getElementById("result");

    try {
        const expression = inputExpression.value;
        const result = eval(expression);
        resultDisplay.textContent = `Result: ${result}`;
    } catch (error) {
        resultDisplay.textContent = "Invalid expression";
    }
}
