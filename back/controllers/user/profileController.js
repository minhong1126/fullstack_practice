const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const { errorResponse, successResponse } = require("../utils/response");

// 유저 정보 가져오기 요청
exports.getUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      errorResponse(res, 404, "해당하는 유저가 존재하지 않습니다.");
    } else {
      successResponse(res, 200, "유저 정보를 조회했습니다.", user);
    }
  } catch (err) {
    errorResponse(res, 500, err.message);
  }
});

// 유저 정보 수정 요청
exports.patchUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, password } = req.body;

  try {
    const user = await User.updateOne(
      { _id: id },
      { $set: { name: name, password: password } }
    );

    if (!(await User.findOne(id))) {
      errorResponse(res, 404, "해당하는 유저가 존재하지 않습니다.");
    } else {
      successResponse(res, 200, "유저 정보를 수정했습니다.", user);
    }
  } catch (err) {
    errorResponse(res, 500, err.message);
  }
});
