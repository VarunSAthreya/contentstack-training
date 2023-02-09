const fs = require("fs").promises;
const { log } = require("console");
const path = require("path");
const AppError = require("../helper/AppError");

const getAllUser = async (req, res, next) => {
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
        return next(new AppError({ statusCode: 503, message: err.message }));
    }
};

const getUserById = async (req, res, next) => {
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
            throw new AppError({ statusCode: 404, message: "User not found!" });
        }

        return res.status(200).send({
            message: "Fetched data successfully.",
            body: { ...data },
        });
    } catch (err) {
        next(
            new AppError({
                statusCode: err.statusCode || 503,
                message: err.message,
            })
        );
    }
};

const createUser = async (req, res, next) => {
    try {
        const { body } = req;

        let users = await fs.readFile(
            path.resolve("./data/data.json"),
            "utf-8"
        );
        users = JSON.parse(users);

        body.id = Date.now().toString();
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

        next(
            new AppError({
                statusCode: err.statusCode || 503,
                message: err.message,
            })
        );
    }
};

const updateUser = async (req, res, next) => {
    try {
        const {
            body,
            params: { id },
        } = req;

        let users = await fs.readFile(
            path.resolve("./data/data.json"),
            "utf-8"
        );
        users = JSON.parse(users);

        const index = users.findIndex((user) => user.id === id);
        if (index < 0)
            throw new AppError({
                message: "Invalid User ID!",
                statusCode: 404,
            });

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

        next(
            new AppError({
                statusCode: err.statusCode || 503,
                message: err.message,
            })
        );
    }
};

const deleteUser = async (req, res, next) => {
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
        if (index < 0)
            throw new AppError({ statusCode: 404, message: "User not found!" });

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
        next(
            new AppError({
                statusCode: err.statusCode || 503,
                message: err.message,
            })
        );
    }
};

module.exports = {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};
