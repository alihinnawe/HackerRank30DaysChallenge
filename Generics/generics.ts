'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function (inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function (): void {
    inputLines = inputString.split('\n');
    inputString = '';
    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

// Generic function that works for any type
function printArray<T>(array: T[]): void {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

function main() {
    // Parse integers array
    const n: number = parseInt(readLine(), 10);
    const intArr: number[] = [];
    for (let i = 0; i < n; i++) {
        intArr.push(parseInt(readLine(), 10));
    }

    // Parse strings array
    const m: number = parseInt(readLine(), 10);
    const strArr: string[] = [];
    for (let i = 0; i < m; i++) {
        strArr.push(readLine());
    }

    // Call the generic function for both arrays
    printArray<number>(intArr);
    printArray<string>(strArr);
}

