const fs = require("fs").promises;
const { log } = require("console");
const path = require("path");

const readFromFile = (relativePath) => {
    log(relativePath);
    return fs.readFile(path.resolve(relativePath), "utf-8");
};

const writeToFile = (relativePath, data) =>
    fs.writeFile(
        path.resolve(relativePath),
        JSON.stringify(data, null, 2),
        "utf-8"
    );

module.exports = { readFromFile, writeToFile };
