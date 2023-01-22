const express = require("express");
const userController = require("../controller/user.controller");

const router = express.Router();
router.route("/").get(userController.getUser).post(userController.createUser);
router
  .route("/:id")
  .put(userController.getUserUpdateById)
  .get(userController.getUserById);

module.exports = router;
