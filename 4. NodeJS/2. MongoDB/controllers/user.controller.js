const uniqid = require("uniqid");
const User = require("../models/user.model");

const getAllUser = async (req, res) => {
    const users = await User.find({ name: "Athreya Varun" });
    console.log(users);

    res.status(201).json({
        message: "Created user successfully!",
        data: users,
    });
};

const getUserById = (req, res) => {};

const createUser = async (req, res) => {
    const {
        body: { name },
    } = req;

    const user = new User({ id: uniqid(), name });
    console.log(user);
    await user.save();

    res.status(201).json({
        message: "Created user successfully!",
        data: user,
    });
};

const updateUser = (req, res) => {};

const deleteUser = async (req, res) => {};

module.exports = {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};
