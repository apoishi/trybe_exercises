// Exercise - 01
const a = 5;
const b = 6;

function sum(a, b) {
	return a + b;
}
function subtraction(a, b) {
	return a - b;
}
function multiplication(a, b) {
	return a * b;
}
function division(a, b) {
	return a / b;
}
function module(a, b) {
	return a % b;
}

// Exercise - 02
const a = 6;
const b = 7;

function biggesttNumber(a, b) {
	if (a > b) {
		return a + ' é maior que ' + b;
	} else {
		return b + ' é maior que ' + a;
	}
}

// Exercise - 03
const a = 10;
const b = 12;
const c = 11;

function largestNumber(a, b, c) {
	if (a > b && a > c) {
		return 'O maior número é:' + a;
	} else if (b > a && b > c) {
		return 'O maior número é:' + b;
	} else {
		return 'O maior número é:' + c;
	}
}

// Exercise - 04
const number = 42;

function positiveNegative(number) {
	if (number > 0) {
		return "positive";
	} else if (number < 0) {
		return "negative";
	} else {
		return "zero";
	}
}

// Exercise - 05
const a = - 150;
const b = 70;
const c = 10;
let triangle = a + b + c;
let positiveTriangle = a > 0 && b > 0 && c > 0;

function triangleAngles(a, b, c) {
	if (positiveTriangle) {
		if (triangle === 180) {
			return true;
		} else {
			return false;
		};
	} else {
		return "invalid";
	}
}
