interface Calculator {
    add: (a: number, b: number) => number;
    subtract: (a: number, b: number) => number;
    multiply: (a: number, b: number) => number;
    divide: (a: number, b: number) => number;
}

class my_calc implements Calculator {
    add(a: number, b: number): number{
        return a + b;
    }
    subtract(a: number, b: number): number{
        return a - b;
    }
    multiply(a: number, b: number): number{
        return a * b;
    }
    divide(a: number, b: number): number{
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    }
}

let calc: my_calc = new my_calc();
console.log(calc.add(10,5));
console.log(calc.subtract(10,5));
console.log(calc.multiply(10,5));
console.log(calc.divide(10,5));




