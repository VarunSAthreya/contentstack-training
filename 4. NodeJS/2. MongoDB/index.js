const path = require("path");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = require("./app");

dotenv.config();
const { MONGO_URL, PORT } = process.env;
console.log(MONGO_URL);
mongoose.set("strictQuery", true);
mongoose
    .connect(MONGO_URL)
    .then((conn) => {
        console.log("Connected to DB Successfully!");
        app.listen(PORT, () => {
            console.log(`Listening to server on: http://localhost:${PORT}/`);
        });
    })
    .catch((err) => {
        console.log(err);
        process.exit(0);
    });
