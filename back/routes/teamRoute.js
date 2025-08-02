const express = require("express");
const app = express();
const router = express.Router();
const teamController = require("../controllers/team/teamController");

router.use("/").post(teamController.createTeam);
router
  .use("/:id")
  .get(teamController.getTeam)
  .patch(teamController.patchTeam)
  .delete(teamController.deleteTeam);

app.use(router);
