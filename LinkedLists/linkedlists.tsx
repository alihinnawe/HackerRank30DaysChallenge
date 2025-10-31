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

// Rename Node to ListNode to avoid conflicts
class ListNode {
    data: number;
    next: ListNode | null;

    constructor(data: number) {
        this.data = data;
        this.next = null;
    }
}

// Function to insert a node at the tail
function insert(head: ListNode | null, data: number): ListNode {
    const newNode = new ListNode(data);

    if (head === null) {
        return newNode;
    }

    let current = head;
    while (current.next !== null) {
        current = current.next;
    }
    current.next = newNode;
    return head;
}

// Function to print the linked list
function printList(head: ListNode | null): void {
    let current = head;
    const result: string[] = [];
    while (current !== null) {
        result.push(current.data.toString());
        current = current.next;
    }
    console.log(result.join(' '));
}

// Main function
function main(): void {
    const T: number = parseInt(readLine().trim());
    let head: ListNode | null = null;

    for (let i = 0; i < T; i++) {
        const data: number = parseInt(readLine().trim());
        head = insert(head, data);
    }

    printList(head);
}
