const express = require("express");
const teamController = require("../controller/team.controller");

const router = express.Router();
router.route("/").get(teamController.getTeam).post(teamController.createTeam);
router.route("/:id").put(teamController.getTeamUpdateById);

module.exports = router;
