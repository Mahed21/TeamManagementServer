const mongoose = require("mongoose");
const UserSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      default: "",
    },
    userRole: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      default: "inactive",
    },
    tournamentHistory: {
      type: String,
      default: "",
    },
    achievement: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("user", UserSchema);

module.exports = User;
