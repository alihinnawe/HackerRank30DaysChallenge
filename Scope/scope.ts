'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

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

class Difference {
    private elements: number[];
    public maximumDifference: number;

    constructor(elements: number[]) {
        this.elements = elements;
        this.maximumDifference = 0;
    }

    computeDifference() {
        const sortedElements = [...this.elements].sort((a, b) => a - b);
        this.maximumDifference = sortedElements[sortedElements.length - 1] - sortedElements[0];
    }
}

function main() {
    const n: number = parseInt(readLine().trim());
    const elements: number[] = readLine()
        .trim()
        .split(' ')
        .map((e: string) => parseInt(e));

    const diff = new Difference(elements);
    diff.computeDifference();
    console.log(diff.maximumDifference);
}
