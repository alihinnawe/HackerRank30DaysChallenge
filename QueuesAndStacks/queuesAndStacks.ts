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
    inputString = inputLines[0].trim(); // take the first line as input
    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

// ----- Your code -----
class Solution {
    private stackArray: string[] = [];
    private queArray: string[] = [];

    pushCharacter(ch: string): void {
        this.stackArray.push(ch);
    }

    enqueueCharacter(ch: string): void {
        this.queArray.push(ch);
    }

    popCharacter(): string {
        return this.stackArray.pop()!;
    }

    dequeueCharacter(): string {
        return this.queArray.shift()!;
    }
}

function main() {
    const s: string = inputString;
    const obj = new Solution();

    // push/enqueue each character
    for (let i = 0; i < s.length; i++) {
        obj.pushCharacter(s[i]);
        obj.enqueueCharacter(s[i]);
    }

    // check palindrome
    let isPalindrome = true;
    for (let i = 0; i < s.length; i++) {
        if (obj.popCharacter() !== obj.dequeueCharacter()) {
            isPalindrome = false;
            break;
        }
    }

    // print result
    if (isPalindrome) {
        console.log(`The word, ${s}, is a palindrome.`);
    } else {
        console.log(`The word, ${s}, is not a palindrome.`);
    }
}
