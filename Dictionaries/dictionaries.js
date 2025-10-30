function processData(input) {
    const lines = input.split('\n');
    const n = parseInt(lines[0]);
    const phoneBook = {};

    // Store name-number pairs
    for (let i = 1; i <= n; i++) {
        const [name, number] = lines[i].split(' ');
        phoneBook[name] = number;
    }

    // Handle queries
    for (let i = n + 1; i < lines.length; i++) {
        const query = lines[i].trim();
        if (query.length === 0) continue;
        
        if (query in phoneBook) {
            console.log(`${query}=${phoneBook[query]}`);
        } else {
            console.log("Not found");
        }
    }
}


process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
