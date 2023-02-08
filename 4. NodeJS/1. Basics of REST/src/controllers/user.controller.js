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
        if (err.errors)
            return res.status(503).send({
                message: err.flatten().fieldErrors,
            });

        return res.status(503).send({
            message: err.message,
        });
    }
};

const updateUser = async (req, res) => {
    try {
        const {
            body,
            params: { id },
        } = req;

        // Check schema
        UserSchema.parse(body);

        let users = await fs.readFile(
            path.resolve("./data/data.json"),
            "utf-8"
        );
        users = JSON.parse(users);

        const index = users.findIndex((user) => user.id === id);
        if (index < 0) throw new Error((message = "Invalid User ID!"));

        users[index] = body;
        users[index].id = id;

        await fs.writeFile(
            path.resolve("./data/data.json"),
            JSON.stringify(users),
            "utf-8"
        );

        return res.status(202).send({
            message: "User updated!",
            data: users[index],
        });
    } catch (err) {
        log(err);

        if (err.errors)
            return res.status(503).send({
                message: err.flatten().fieldErrors,
            });

        return res.status(503).send({
            message: err.message,
        });
    }
};

const deleteUser = async (req, res) => {
    try {
        const {
            params: { id },
        } = req;

        let users = await fs.readFile(
            path.resolve("./data/data.json"),
            "utf-8"
        );
        users = JSON.parse(users);

        const index = users.findIndex((user) => user.id === id);
        if (index < 0) throw new Error((message = "Invalid User ID!"));

        const user = users[index];
        users.splice(index, 1);

        await fs.writeFile(
            path.resolve("./data/data.json"),
            JSON.stringify(users),
            "utf-8"
        );

        return res.status(202).send({
            message: "User Deleted!",
            data: user,
        });
    } catch (err) {
        return res.status(503).send({
            message: err.message,
        });
    }
};

module.exports = {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};
