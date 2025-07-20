const express = require("express");
const app = express();
const router = express.Router();
const {
  createUser,
  getAllUsers,
  getUser,
} = require("../controllers/userController");

router.route("/").post(createUser).get(getAllUsers);

router.route("/:id").get(getUser).put().delete();

module.exports = router;
