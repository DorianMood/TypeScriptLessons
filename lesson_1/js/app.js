var el = this.document.getElementById("content");
var User = (function () {
    function User(_name, _age) {
        this.name = _name;
        this.age = _age;
    }
    return User;
}());
var tom = new User("Tommy", 29);
el.innerHTML = "Name : " + tom.name + " Age : " + tom.age + "";
var STRING_VAL = 'abcdef';
var ARRAY = [1, 4, 6, 3, 2, 0];
var results = [];
function reverseString(_string) {
    return _string.split('').reverse().join('');
}
var string = STRING_VAL;
string = reverseString(string);
results.push(string);
function reverseStringRecursively(_string) {
    if (_string.length === 1) {
        return _string;
    }
    else if (_string.length > 1) {
        var substrings = [];
        substrings.push(_string.substr(0, _string.length / 2));
        substrings.push(_string.substr(_string.length / 2));
        return reverseStringRecursively(substrings[1]) +
            reverseStringRecursively(substrings[0]);
    }
    else {
        return '';
    }
}
string = STRING_VAL;
string = reverseStringRecursively(string);
results.push(string);
function isPalindrom(_string) {
    if (_string === reverseString(_string))
        return true;
    else
        return false;
}
var stringPalindrom = 'abcba';
string = STRING_VAL;
results.push(stringPalindrom + " " + isPalindrom(stringPalindrom) +
    (", " + string + " " + isPalindrom(string)));
function findMax(_array) {
    return Math.max.apply(null, _array);
}
var arr = ARRAY;
results.push(arr + " max is " + findMax(arr));
var ComplexNumber = (function () {
    function ComplexNumber(_a, _b) {
        this.a = _a;
        this.b = _b;
    }
    ComplexNumber.prototype.add = function (_complexNumber) {
        this.a += _complexNumber.a;
        this.b += _complexNumber.b;
        return this;
    };
    ComplexNumber.prototype.sub = function (_complexNumber) {
        this.a -= _complexNumber.a;
        this.b -= _complexNumber.b;
        return this;
    };
    ComplexNumber.prototype.mul = function (_complexNumber) {
        this.a = this.a * _complexNumber.a - this.b * _complexNumber.b;
        this.b = this.b * _complexNumber.a + this.a * _complexNumber.b;
        return this;
    };
    ComplexNumber.prototype.div = function (_complexNumber) {
        this.a = (this.a * _complexNumber.a + this.b * _complexNumber.b) /
            (Math.pow(_complexNumber.a, 2) + Math.pow(_complexNumber.b, 2));
        this.b = (this.b * _complexNumber.a - this.a * _complexNumber.b) /
            (Math.pow(_complexNumber.a, 2) + Math.pow(_complexNumber.b, 2));
        return this;
    };
    ComplexNumber.prototype.toString = function () {
        return "ComplexNumber(" + this.a + ", " + this.b + ")";
    };
    return ComplexNumber;
}());
var number_1 = new ComplexNumber(1, 1);
var number_2 = new ComplexNumber(4, -2);
results.push(number_1 + " " + number_2 + "\n\tadd: " + number_1.add(number_2) + "\n\tsub: " + number_1.sub(number_2) + "\n\tmul: " + number_1.mul(number_2) + "\n\tdiv: " + number_1.div(number_2));
function generateMultiplicationTable(_num) {
    var result = '';
    for (var i = 1; i < 10; i++) {
        for (var j = 1; j <= _num; j++) {
            result += j + " * " + i + " = " + j * i + "\t";
        }
        result += '\n';
    }
    return result;
}
console.log(generateMultiplicationTable(9));
results.push("Results in console.");
function minify(_string) {
    var result = _string.substring(0, 1)[0];
    result += (_string.length - 2).toString();
    result += _string.substring(_string.length - 1);
    return result;
}
string = STRING_VAL;
results.push(string + " -> " + minify(string));
function nonDecreasingSequenceLength(_array) {
    var length = 1;
    var maxLength = 0;
    for (var i = 1; i < _array.length; i++) {
        if (_array[i] >= _array[i - 1]) {
            length++;
        }
        else {
            length = 1;
        }
        if (maxLength < length)
            maxLength = length;
    }
    return maxLength;
}
arr = ARRAY;
results.push(arr + " | " + nonDecreasingSequenceLength(arr));
function isAverageGreaterThenLength(_array) {
    function average(_array) {
        var sum = 0;
        for (var i = 0; i < _array.length; i++) {
            sum += _array[i];
        }
        return sum / _array.length;
    }
    return average(_array) > _array.length;
}
arr = ARRAY;
results.push(arr + " | " + arr.length + " : " + isAverageGreaterThenLength(arr));
results.push("");
function executeBinaryOp(_function, _first, _second) {
    return _function(_first, _second);
}
function twoArgs(_first, _second) {
    return _first + _second;
}
var first = 1;
var second = 2;
results.push("first = " + first + ", second = " + second + ",\n\tf(first, second) = " + executeBinaryOp(twoArgs, first, second));
var resultsDiv = this.document.getElementById("results");
var element = this.document.createElement('li');
for (var i = 0; i < results.length; i++) {
    element = this.document.createElement('li');
    element.innerHTML = results[i];
    resultsDiv.appendChild(element);
}
//# sourceMappingURL=app.js.map