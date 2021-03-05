function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (array) {
	let result= 0;
	array.forEach(element => {
		result += element;
	});
	return result;
}

function multiply (array) {
	let result = array[0] * array[1]; 
	if (array.length > 2)
		for (i = 2; i < array.length; i++)
			result *= array[i];
	return result;
}

function power(a, b) {
	return a ** b;
}

function factorial(number) {
	let result = number;
	if (number <= 1)
		result = 1;
	else
		while (number != 1)
			result *= --number;
	return result;
}