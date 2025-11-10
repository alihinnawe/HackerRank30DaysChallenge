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

// Your provided prime function (kept as-is)
function isPrime(n: number): boolean {
  if (n <= 1) return false; // not prime
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false; // found a divisor
    }
  }
  return true; // no divisors found
}

function main() {
    // Read number of test cases (first non-empty line)
    while (currentLine < inputLines.length && readLine().trim() === '') {
        // skip empty lines
    }
    // we moved currentLine by readLine(); step back one if we skipped whitespace above,
    // safer approach: reset pointer and parse carefully:
    currentLine = 0;

    // collect all tokens (split by whitespace) to be robust to different input formats
    const allTokens: string[] = inputLines
      .map(line => line.trim())
      .filter(line => line.length > 0)
      .join(' ')
      .split(/\s+/);

    if (allTokens.length === 0) return;

    const t = parseInt(allTokens[0], 10);
    let idx = 1;

    for (let tc = 0; tc < t; tc++) {
        if (idx >= allTokens.length) break; // safety
        const n = parseInt(allTokens[idx++], 10);

        if (isPrime(n)) {
            console.log('Prime');
        } else {
            console.log('Not prime');
        }
    }
}

