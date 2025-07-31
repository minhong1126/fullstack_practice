const express = require("express");
const app = express();
const router = express.Router();
const {
  createUser,
  getAllUsers,
  getUser,
  patchUser,
  deleteUser,
} = require("../controllers/userController");

router.route("/").post(createUser).get(getAllUsers);

router.route("/:id").get(getUser).patch(patchUser).delete(deleteUser);

app.use(router);
