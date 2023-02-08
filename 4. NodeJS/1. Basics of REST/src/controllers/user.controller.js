const fs = require("fs").promises;
const { log } = require("console");
const path = require("path");
const UserSchema = require("../model/user.model");

const getAllUser = async (req, res) => {
    try {
        let users = await fs.readFile(
            path.resolve("./data/data.json"),
            "utf-8"
        );
        users = JSON.parse(users);

        return res.status(200).send({
            message: "Fetched data successfully.",
            body: [...users],
        });
    } catch (err) {
        return res.status(503).send({
            message: err.message,
        });
    }
};

const getUserById = async (req, res) => {
    try {
        const {
            params: { id },
        } = req;

        let users = await fs.readFile(
            path.resolve("./data/data.json"),
            "utf-8"
        );
        users = JSON.parse(users);

        const data = users.find((usr) => usr.id === id);
        if (!data) {
            return res.status(404).send({
                message: "User not found!",
            });
        }

        return res.status(200).send({
            message: "Fetched data successfully.",
            body: { ...data },
        });
    } catch (err) {
        return res.status(503).send({
            message: err.message,
        });
    }
};

const createUser = async (req, res) => {
    try {
        const { body } = req;
        // Check schema
        UserSchema.parse(body);

        let users = await fs.readFile(
            path.resolve("./data/data.json"),
            "utf-8"
        );
        users = JSON.parse(users);

        body.id = (users.length + 1).toString();
        users.push(body);

        await fs.writeFile(
            path.resolve("./data/data.json"),
            JSON.stringify(users),
            "utf-8"
        );

        return res.status(201).send({
            message: "User Created!",
            data: body,
        });
    } catch (err) {
        log(err);
        return res.status(503).send({
            message: `${err.errors[0].message} at ${err.errors[0].path}`,
        });
    }
};

module.exports = {
    getAllUser,
    getUserById,
    createUser,
};
