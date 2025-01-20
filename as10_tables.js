function generateMultiplicationTable(n) {
    for (var i = 1; i <= 10; i++) {
        console.log("".concat(n, " x ").concat(i, " = ").concat(n * i));
    }
}
generateMultiplicationTable(5);
