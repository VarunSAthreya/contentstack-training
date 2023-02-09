const fs = require("fs").promises;
const path = require("path");

const readFromFile = async (relativePath) => {
    const users = await fs.readFile(path.resolve(relativePath), "utf-8");
    return JSON.parse(users);
};

const writeToFile = async (relativePath, data) =>
    fs.writeFile(path.resolve(relativePath), JSON.stringify(data), "utf-8");

module.exports = { readFromFile, writeToFile };
