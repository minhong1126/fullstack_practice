const express = require("express");
const app = express();
const router = express.Router();

router.route("/").post().get();
router.route("/:id").get().put().delete();

app.use(router);
