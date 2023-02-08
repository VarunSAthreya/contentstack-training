const express = require("express");
const {
    getAllUser,
    getUserById,
    createUser,
} = require("../controllers/user.controller");

const router = express.Router();

router.route("/").get(getAllUser).post(createUser);
router.route("/:id").get(getUserById);

module.exports = router;
