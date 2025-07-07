const express = require("express");
const app = express();
const router = express.Router();

router.use("/").post().get();
router.use("/:id").get().put().delete();

app.use(router);
