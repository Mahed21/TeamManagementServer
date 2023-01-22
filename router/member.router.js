const express = require("express");
const memberController = require("../controller/member.controller");

const router = express.Router();
router
  .route("/")
  .get(memberController.getmember)
  .post(memberController.createMember);

module.exports = router;
