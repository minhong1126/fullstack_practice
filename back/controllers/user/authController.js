const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const { errorResponse, successResponse } = require("../utils/response");

// 유저 생성 요청
exports.createUser = asyncHandler(async (req, res) => {
  const { email, password, name } = req.body;
  if (!email || !password || !name) {
    errorResponse(res, 400, "필요한 값이 입력되지 않았습니다.");
  } else {
    try {
      if (await User.findOne({ email })) {
        errorResponse(res, 409, "이미 존재하는 이메일입니다.");
      }

      const user = await User.create({ email, password, name });
      successResponse(res, 201, "유저가 생성되었습니다.", user);
    } catch (err) {
      errorResponse(res, 500, err.message);
    }
  }
});

// 유저 삭제 요청
exports.deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    if (!(await User.findOne(id))) {
      errorResponse(res, 404, "해당하는 유저가 존재하지 않습니다.");
    } else {
      const user = await User.deleteOne({ _id: id });
      successResponse(res, 200, "유저 정보를 삭제했습니다.");
    }
  } catch (err) {
    errorResponse(res, 500, err.message);
  }
});
