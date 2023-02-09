const { log } = require("console");
const AppError = require("../helper/AppError");
const { readFromFile, writeToFile } = require("../helper/fileIO");

const getAllUser = async (req, res, next) => {
    try {
        const users = await readFromFile("./data/data.json");

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

        const users = await readFromFile("./data/data.json");

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

        const users = await readFromFile("./data/data.json");

        body.id = Date.now().toString();
        users.push(body);

        await writeToFile("./data/data.json", users);

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

        const users = await readFromFile("./data/data.json");

        const index = users.findIndex((user) => user.id === id);
        if (index < 0)
            throw new AppError({
                message: "Invalid User ID!",
                statusCode: 404,
            });

        users[index] = body;
        users[index].id = id;

        await writeToFile("./data/data.json", users);

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

        const users = await readFromFile("./data/data.json");

        const index = users.findIndex((user) => user.id === id);
        if (index < 0)
            throw new AppError({ statusCode: 404, message: "User not found!" });

        const user = users[index];
        users.splice(index, 1);

        await writeToFile("./data/data.json", users);

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
