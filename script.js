let displayValue;
const sum = document.getElementById("sum");
let operand1;
let operator;
let operand2;

function add(a, b) {
	return a + b;
}
function subtract(a, b) {
	return a - b;
}
function multiply(a, b) {
	return a * b;
}
function divide(a, b) {
	return a / b;
}
function operate(operator, operand1, operand2) {
	switch (operator) {
		case "+":
			add(operand1, operand2);
			break;
		case "*":
			multiply(operand1, operand2);
			break;
		case "-":
			subtract(operand1, operand2);
			break;
		case "/":
			divide(operand1, operand2);
	}
}
function clear() {
	displayValue = "";
	sum.textContent = "";
	operand1 = undefined;
	operand2 = undefined;
	operator = undefined;
}
function changeDisplay() {
	sum.textContent = displayValue;
}
function addGlobalEventListener(type, selector, callback) {
    document.addEventListener(type, e => {
        if (e.target.matches(selector))
            callback(e);
    })
}