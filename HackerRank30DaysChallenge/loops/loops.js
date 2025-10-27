'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function recursiveFunction(n, i = 1) {
    if (i > 10) return; 
    console.log(`${n} x ${i} = ${n * i}`);
    recursiveFunction(n, i + 1); 
}

function main() {
    const n = parseInt(readLine().trim(), 10);
    recursiveFunction(n);
}
