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

function main() {
    const N = parseInt(readLine().trim(), 10);
    const gmailUsers = [];

    for (let NItr = 0; NItr < N; NItr++) {
        const firstMultipleInput = readLine().trim().split(' ');
        const firstName = firstMultipleInput[0];
        const emailID = firstMultipleInput[1];

        // Regex to check if email ends with @gmail.com
        if (/^[a-z0-9._%+-]+@gmail\.com$/.test(emailID)) {
            gmailUsers.push(firstName);
        }
    }

    // Sort names alphabetically
    gmailUsers.sort();

    // Print each name on a new line
    for (const name of gmailUsers) {
        console.log(name);
    }
}

