const fs = require('fs');

const data = "I am appended at the last"

fs.appendFile('./data.txt', data, (err) => {
    if (err) 
        console.log("Error appending file", err);
    else
        console.log("File appended successfully");
});