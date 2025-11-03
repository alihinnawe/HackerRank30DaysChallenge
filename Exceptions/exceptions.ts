'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', (inputStdin: string) => {
    inputString += inputStdin;
});

process.stdin.on('end', () => {
    inputLines = inputString.split('\n');
    inputString = '';
    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

function main() {
    const S: string = readLine().trim();

    try {
        // The exact pattern you provided
        Number.isInteger(Number(S)) || (() => { throw new Error(); })();
        console.log(S);
    } catch {
        console.log("Bad String");
    }
}
