const express = require("express");
const morgan = require("morgan");

const userRouter = require("./routes/user.route");

const app = express();
const port = process.env.PORT || 8000;

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    console.log("hey");
    res.status(200).send("Hello World");
});

app.use("/users", userRouter);

module.exports = app;
