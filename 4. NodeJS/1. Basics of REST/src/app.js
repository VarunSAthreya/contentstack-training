require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const ErrorHandler = require("./middleware/ErrorHandler");

const userRouter = require("./routes/user.route");

const app = express();

const port = process.env.PORT || 8000;

app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.status(200).send({
        message: "Hello",
    });
});

app.use("/users", userRouter);
app.use(ErrorHandler);

app.listen(port, () => {
    console.log(`Listening to server on: http://localhost:${port}/`);
});
