'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';
    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

// Calculator class
class Calculator {
    power(n: number, p: number): number {
        if (n < 0 || p < 0) {
            throw new Error("n and p should be non-negative");
        }
        return Math.pow(n, p);
    }
}

function main() {
    const T: number = parseInt(readLine().trim());
    const myCalculator = new Calculator();

    for (let i = 0; i < T; i++) {
        const [nStr, pStr] = readLine().trim().split(' ');
        const n = parseInt(nStr);
        const p = parseInt(pStr);

        try {
            const result = myCalculator.power(n, p);
            console.log(result);
        } catch (e: any) {
            console.log(e.message);
        }
    }
}
