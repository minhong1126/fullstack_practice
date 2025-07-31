const express = require("express");
const app = express();
const router = express.Router();
const teamController = require("../controllers/teamController");

router.use("/").post(teamController.createTeam).get(teamController.getAllTeams);
router
  .use("/:id")
  .get(teamController.getTeam)
  .patch(teamController.patchTeam)
  .delete(teamController.deleteTeam);

app.use(router);
