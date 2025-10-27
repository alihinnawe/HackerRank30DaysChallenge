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
    const n = parseInt(readLine().trim(), 10);

    const binaryStr = n.toString(2);

    const onesGroups = binaryStr.split('0');

    let maxConsecutiveOnes = 0;

    for (let i = 0; i < onesGroups.length; i++) {
        if (onesGroups[i].length > maxConsecutiveOnes) {
            maxConsecutiveOnes = onesGroups[i].length;
        }
    }

    console.log(maxConsecutiveOnes);
}

