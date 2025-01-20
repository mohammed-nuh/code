var my_calc = /** @class */ (function () {
    function my_calc() {
    }
    my_calc.prototype.add = function (a, b) {
        return a + b;
    };
    my_calc.prototype.subtract = function (a, b) {
        return a - b;
    };
    my_calc.prototype.multiply = function (a, b) {
        return a * b;
    };
    my_calc.prototype.divide = function (a, b) {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    };
    return my_calc;
}());
var calc = new my_calc();
console.log(calc.add(10, 5));
console.log(calc.subtract(10, 5));
console.log(calc.multiply(10, 5));
console.log(calc.divide(10, 5));
