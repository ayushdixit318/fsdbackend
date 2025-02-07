const fs = require('fs');

const data = "I am async write";

fs.writeFile('./data.txt', data, (err) => {
    if (err) {
        console.log("Error writing file", err);
        return;
    }
    console.log("File written successfully");
});