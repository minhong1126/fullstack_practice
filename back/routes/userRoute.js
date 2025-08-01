const express = require("express");
const app = express();
const router = express.Router();
const profileController = require("../controllers/user/profileController");
const adminUserController = require("../controllers/user/adminUserController");

router.route("/").post(authController.createUser);
router
  .route("/:id")
  .get(profileController.getUser)
  .patch(profileController.patchUser)
  .delete(authController.deleteUser);
// router.route("/:id/team").get(getUserTeams);

app.use(router);
