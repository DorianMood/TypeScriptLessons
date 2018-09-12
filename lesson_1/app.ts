var el = this.document.getElementById("content");

class User {
	name: string;
	age: number;

	constructor(_name: string, _age: number) {
		this.name = _name;
		this.age = _age;
	}
}

var tom : User = new User("Tommy", 29);
el.innerHTML = "Name : " + tom.name + " Age : " + tom.age + "";

// ---------------------------------- Homework ---------------------------------
const STRING_VAL = 'abcdef';
const ARRAY: number[] = [1, 4, 6, 3, 2, 0];
let results: Array<string> = [];

// ----------------------------------- EX 1 ------------------------------------
function reverseString(_string: string) {
	return _string.split('').reverse().join('');
}

let string = STRING_VAL;
string = reverseString(string);
results.push(string);

// ----------------------------------- EX 2 ------------------------------------
function reverseStringRecursively(_string: string) {
	if (_string.length === 1) {
		return _string;
	} else if (_string.length > 1) {
		let substrings: Array<string> = [];
		substrings.push(_string.substr(0, _string.length / 2))
		substrings.push(_string.substr(_string.length / 2));
		return reverseStringRecursively(substrings[1]) + 
			   reverseStringRecursively(substrings[0])
	} else {
		return '';
	}
}

string = STRING_VAL;
string = reverseStringRecursively(string);
results.push(string);

// ----------------------------------- EX 3 ------------------------------------
function isPalindrom(_string: string) {
	if (_string === reverseString(_string))
		return true;
	else
		return false;
}
let stringPalindrom = 'abcba';
string = STRING_VAL;
results.push(
	`${stringPalindrom} ${isPalindrom(stringPalindrom)}` + 
	`, ${string} ${isPalindrom(string)}`
	);

// ----------------------------------- EX 4 ------------------------------------
function findMax(_array: number[]) {
	return Math.max.apply(null, _array);
}

let arr = ARRAY;
results.push(
	`${arr} max is ${findMax(arr)}`
	);

// ----------------------------------- EX 5 ------------------------------------
class ComplexNumber {
	a: number;
	b: number;

	constructor(_a:number, _b: number) {
		this.a = _a;
		this.b = _b;
	}
	add(_complexNumber: ComplexNumber) {
		this.a += _complexNumber.a;
		this.b += _complexNumber.b;
		return this;
	}
	sub(_complexNumber: ComplexNumber) {
		this.a -= _complexNumber.a;
		this.b -= _complexNumber.b;
		return this;
	}
	mul(_complexNumber: ComplexNumber) {
		this.a = this.a * _complexNumber.a - this.b * _complexNumber.b;
		this.b = this.b * _complexNumber.a + this.a * _complexNumber.b;
		return this;
	}
	div(_complexNumber: ComplexNumber) {
		this.a = (this.a * _complexNumber.a + this.b * _complexNumber.b) /
				(Math.pow(_complexNumber.a, 2) + Math.pow(_complexNumber.b, 2));
		this.b = (this.b * _complexNumber.a - this.a * _complexNumber.b) /
				(Math.pow(_complexNumber.a, 2) + Math.pow(_complexNumber.b, 2));
		return this;
	}
	toString() {
		return `ComplexNumber(${this.a}, ${this.b})`;
	}
}
let number_1: ComplexNumber = new ComplexNumber(1, 1);
let number_2: ComplexNumber = new ComplexNumber(4, -2);

results.push(
	`${number_1} ${number_2}
	add: ${number_1.add(number_2)}
	sub: ${number_1.sub(number_2)}
	mul: ${number_1.mul(number_2)}
	div: ${number_1.div(number_2)}`
	);

// ----------------------------------- EX 6 ------------------------------------
function generateMultiplicationTable(_num: number) {
	let result: string = '';
	for (let i = 1; i < 10; i++) {
		for (let j = 1; j <= _num; j++) {
			result += `${j} * ${i} = ${j * i}\t`
		}
		result += '\n';
	}
	return result;
}
console.log(generateMultiplicationTable(9));
results.push(
	`Results in console.`
	);

// ----------------------------------- EX 7 ------------------------------------
function minify(_string: string) {
	let result = _string.substring(0, 1)[0];
	result += (_string.length - 2).toString();
	result += _string.substring(_string.length - 1);
	return result;
}
string = STRING_VAL;
results.push(
	`${string} -> ${minify(string)}`
	);

// ----------------------------------- EX 8 ------------------------------------
function nonDecreasingSequenceLength(_array: number[]) {
	let length = 1;
	let maxLength = 0;
	for (let i = 1; i < _array.length; i++) {
		if (_array[i] >= _array[i - 1]) {
			length++;
		} else {
			length = 1;
		}
		if (maxLength < length)
			maxLength = length;
	}
	return maxLength;
}
arr = ARRAY;
results.push(
	`${arr} | ${nonDecreasingSequenceLength(arr)}`
	);

// ----------------------------------- EX 9 ------------------------------------
function isAverageGreaterThenLength(_array: number[]) {
	function average(_array: number[]) {
		let sum = 0;
		for (let i = 0; i < _array.length; i++) {
			sum += _array[i];
		}
		return sum / _array.length;
	}
	return average(_array) > _array.length;
}

arr = ARRAY;
results.push(
	`${arr} | ${arr.length} : ${isAverageGreaterThenLength(arr)}`
	);

// ----------------------------------- EX 10 -----------------------------------
results.push(
	``
	);

// ----------------------------------- EX 11 -----------------------------------
function executeBinaryOp(_function: (a: number, b: number) => number, _first: number, _second: number) {
	return _function(_first, _second);
}
function twoArgs(_first: number, _second: number) {
	return _first + _second;
}
let first = 1;
let second = 2;
results.push(
	`first = ${first}, second = ${second},
	f(first, second) = ${executeBinaryOp(twoArgs, first, second)}`
	);

// ------------------------------ Print results --------------------------------
let resultsDiv = this.document.getElementById("results");
let element = this.document.createElement('li')

for (let i = 0; i < results.length; i++) {
	element = this.document.createElement('li')
	element.innerHTML = results[i];
	resultsDiv.appendChild(element);
}

