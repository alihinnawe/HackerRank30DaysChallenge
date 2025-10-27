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
    const arr = [];

    // Read the 6x6 array from input
    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().trim().split(' ').map(Number);
    }

    // Initialize max with the first hourglass sum
    let max = arr[0][0] + arr[0][1] + arr[0][2]
                      + arr[1][1]
            + arr[2][0] + arr[2][1] + arr[2][2];

    // Loop through all possible hourglasses
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const sum = arr[i][j] + arr[i][j+1] + arr[i][j+2]
                                    + arr[i+1][j+1]
                      + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
            if (sum > max) {
                max = sum; // Update max inline
            }
        }
    }

    console.log(max);
}

