function generateMultiplicationTable(n: number): void {
    for(let i = 1; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
}

generateMultiplicationTable(5);