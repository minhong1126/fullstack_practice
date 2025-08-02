const express = require("express");
const app = express();
const router = express.Router();
const profileController = require("../controllers/user/profileController");

router.route("/").post(authController.createUser);
router
  .route("/:id")
  .get(profileController.getUser)
  .patch(profileController.patchUser)
  .delete(authController.deleteUser);

app.use(router);
