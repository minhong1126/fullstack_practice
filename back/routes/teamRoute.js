const express = require("express");
const { createTeam, getAllTeams } = require("../controllers/teamController");
const app = express();
const router = express.Router();

router.use("/").post(createTeam).get(getAllTeams);
router.use("/:id").get().put().delete();

app.use(router);
