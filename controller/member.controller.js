const Member = require("../model/member");
exports.getmember = async (req, res) => {
  try {
    const member = await Member.find({});
    res.status(200).json({
      status: "success",
      message: "data get Successfully",
      data: member,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "data fail to get",
      data: error.message,
    });
  }
};

exports.createMember = async (req, res, mext) => {
  try {
    const member = new Member(req.body);
    const result = await member.save();
    res.status(200).json({
      status: "success",
      message: "data get Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "data fail to get",
      data: error.message,
    });
  }
};
