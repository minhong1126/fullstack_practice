const express = require("express");
const {
  createTeam,
  getAllTeams,
  getTeam,
  patchTeam,
  deleteTeam,
} = require("../controllers/teamController");
const app = express();
const router = express.Router();

router.use("/").post(createTeam).get(getAllTeams);
router.use("/:id").get(getTeam).patch(patchTeam).delete(deleteTeam);

app.use(router);
