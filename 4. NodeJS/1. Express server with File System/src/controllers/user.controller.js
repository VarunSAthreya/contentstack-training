const { log } = require("console");
const AppError = require("../helper/AppError");
const { readFromFile, writeToFile } = require("../helper/fileIO");

const getAllUser = (req, res, next) => {
    try {
        readFromFile("./data/data.json")
            .then((data) => {
                const users = JSON.parse(data);
                return res.status(200).send({
                    message: "Fetched data successfully.",
                    body: [...users],
                });
            })
            .catch((err) => {
                log(err);
                throw err;
            });
    } catch (err) {
        return next(new AppError({ statusCode: 503, message: err.message }));
    }
};

const getUserById = (req, res, next) => {
    try {
        const {
            params: { id },
        } = req;

        readFromFile("./data/data.json")
            .then((data) => {
                const users = JSON.parse(data);
                const user = users.find((usr) => usr.id === id);
                if (!data) {
                    throw new AppError({
                        statusCode: 404,
                        message: "User not found!",
                    });
                }

                return res.status(200).send({
                    message: "Fetched data successfully.",
                    body: { ...user },
                });
            })
            .catch((err) => {
                log(err);
                throw err;
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

const createUser = (req, res, next) => {
    try {
        const { body } = req;

        readFromFile("./data/data.json")
            .then((data) => {
                const users = JSON.parse(data);
                body.id = Date.now().toString();
                users.push(body);

                writeToFile("./data/data.json", users)
                    .then(() => {
                        return res.status(201).send({
                            message: "User Created!",
                            data: body,
                        });
                    })
                    .catch((err) => {
                        log(err);
                        throw err;
                    });
            })
            .catch((err) => {
                log(err);
                throw err;
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

const updateUser = (req, res, next) => {
    try {
        const {
            body,
            params: { id },
        } = req;

        readFromFile("./data/data.json")
            .then((data) => {
                const users = JSON.parse(data);
                const index = users.findIndex((user) => user.id === id);
                if (index < 0)
                    throw new AppError({
                        message: "Invalid User ID!",
                        statusCode: 404,
                    });

                users[index] = body;
                users[index].id = id;

                writeToFile("./data/data.json", users)
                    .then(() => {
                        return res.status(202).send({
                            message: "User updated!",
                            data: users[index],
                        });
                    })
                    .catch((err) => {
                        log(err);
                        throw err;
                    });
            })
            .catch((err) => {
                log(err);
                throw err;
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

        readFromFile("./data/data.json")
            .then((data) => {
                const users = JSON.parse(data);
                const index = users.findIndex((user) => user.id === id);
                if (index < 0)
                    throw new AppError({
                        statusCode: 404,
                        message: "User not found!",
                    });

                const user = users[index];
                users.splice(index, 1);

                writeToFile("./data/data.json", users)
                    .then(() => {
                        return res.status(202).send({
                            message: "User Deleted!",
                            data: user,
                        });
                    })
                    .catch((err) => {
                        log(err);
                        throw err;
                    });
            })
            .catch((err) => {
                log(err);
                throw err;
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
