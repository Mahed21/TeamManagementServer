const mongoose = require("mongoose");
const MemberSchema = mongoose.Schema(
  {
    teamName: {
      type: String,
      required: true,
    },
    adminEmail: {
      type: String,
      default: "",
    },
    playerEmail: {
      type: String,
      default: "",
    },
    playerName: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const Member = mongoose.model("member", MemberSchema);

module.exports = Member;
