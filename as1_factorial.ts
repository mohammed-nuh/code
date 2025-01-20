function factorial(n: number): number{
    let factorial: number = 1;
    if(n === 0 || n === 1){
        return 1;
    }
    else {
        for(let i = 2; i <= n; i++){
            factorial *= i;
        }
        return factorial;
    }
}

let num: number = 5;
console.log(`factorial of ${num} is ${factorial(num)}`);