const express = require("express");
const app = express();
const router = express.Router();
const memberController = require("../controllers/member/memberController");
const ownerController = require("../controllers/member/ownerController");

router
  .route("/:teamId/member/:userId")
  .post(memberController.addMember)
  .get(memberController.getMember)
  .patch(memberController.patchMember)
  .delete(memberController.removeMember);
router
  .route("/:teamId/owner")
  .get(ownerController.getOwner)
  .patch(ownerController.patchOwner);

app.use(router);
