const mongoose = require("mongoose");
const TeamSchema = mongoose.Schema(
  {
    teamName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      default: "",
    },
    address: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      default: "inactive",
    },
  },
  { timestamps: true }
);

const Team = mongoose.model("team", TeamSchema);

module.exports = Team;
