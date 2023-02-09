const express = require("express");
const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
} = require("../controllers/user.controller");
const { validateUserPayload } = require("../middleware/user.middleware");

const router = express.Router();

router.route("/").get(getAllUser).post(validateUserPayload, createUser);
router
    .route("/:id")
    .get(getUserById)
    .put(validateUserPayload, updateUser)
    .delete(deleteUser);

module.exports = router;
