function fibonacci(n) {
    var fibonnaci_array = [0];
    if (n <= 0) {
        throw new Error("Dont enter zero and negative numbers");
    }
    else if (n == 1) {
        return fibonnaci_array;
    }
    else {
        fibonnaci_array.push(1);
        for (var i = 1; i <= n - 2; i++) {
            fibonnaci_array.push(fibonnaci_array[i - 1] + fibonnaci_array[i]);
        }
    }
    return fibonnaci_array;
}
console.log(fibonacci(7));
