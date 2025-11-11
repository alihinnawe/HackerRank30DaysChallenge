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

function main() {
    // Enter your code here
    // let readrealine : string = readLine();
    let fine : number;
    let currentDate = readLine().trim().split(' ');
    let d1 : number =  Number.parseInt(currentDate[0]);
    let m1 =  Number.parseInt(currentDate[1]);
    let y1 = Number.parseInt(currentDate[2]);

    let dueDate  = readLine().trim().split(' ');
    
    let d2 : number  = Number.parseInt(dueDate[0]);
    let m2  =  Number.parseInt(dueDate[1]);
    let y2  = Number.parseInt(dueDate[2]);
    
  fine =    y1 > y2 ? 10000 :
            y1 === y2 && m1 > m2 ? 500 * (m1 - m2) :
            y1 === y2 && m1 === m2 && d1 > d2 ? 15 * (d1 - d2) :
            0;
    
    console.log(fine);
}
