const { getName } = require("./name.js");
const fs = require('fs');

console.log(__dirname);

fs.writeFile('name.txt', 'Ada Lovelace', (error) => {
    if (error) console.log(error);
});

fs.readFile('name.txt', 'utf8', (error, content) => {
    console.log(content);
});

function sum(numberOne, numberTwo) {
    console.log(numberOne + numberTwo);
}

console.log(getName());

sum(5, 5);