function factorial(n) {
    var factorial = 1;
    if (n === 0 || n === 1) {
        return 1;
    }
    else {
        for (var i = 2; i <= n; i++) {
            factorial *= i;
        }
        return factorial;
    }
}
var num = 5;
console.log("factorial of ".concat(num, " is ").concat(factorial(num)));
