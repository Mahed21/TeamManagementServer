const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const { query } = require("express");
app.use(express.json());
app.use(cors());
const UserRouter = require("./router/user.router");
const teamRouter = require("./router/team.router");
const memberRouter = require("./router/member.router");

app.use("/user", UserRouter);
app.use("/team", teamRouter);
app.use("/member", memberRouter);

module.exports = app;
