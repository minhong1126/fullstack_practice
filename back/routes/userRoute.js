const express = require("express");
const app = express();
const router = express.Router();
const { createUser, getAllUsers } = require("../controllers/userController");

router.route("/").post(createUser).get(getAllUsers);

// router.route("/:id").get().put().delete();

module.exports = router;
