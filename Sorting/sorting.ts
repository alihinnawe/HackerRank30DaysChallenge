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

function swapNumbers () : void {
    const n: number = parseInt(readLine().trim(), 10);
    const a: number[] = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));        
    let numSwaps : number = 0;

    for ( let i : number = 0; i < n ; i++) {
        let numberToSwap : number;    

        for ( let j : number = 0; j < n - 1; j++ ) {
            if (a [j] > a[j + 1]) {
                numberToSwap = a[j];
                a[j] = a[j + 1] ;
                a[j +1] = numberToSwap;
                numSwaps += 1;  
            }
        }

    }
    console.log(`Array is sorted in ${numSwaps} swaps.`);
    console.log(`First Element: ${a[0]}`);
    console.log(`Last Element: ${a[n - 1]}`);
    
}

function main() {

       swapNumbers();
        
    // Write your code here
    
}

