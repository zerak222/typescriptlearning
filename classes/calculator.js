console.log("*****************Calculator*****************");
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.sum = function (num1, num2) {
        return num1 + num2;
    };
    Calculator.sub = function (num1, num2) {
        return num1 - num2;
    };
    return Calculator;
}());
console.log("Sum of 1 and 2 is :", Calculator.sum(1, 2));
console.log("Difference of 3 and 2 is :", Calculator.sub(3, 2));
