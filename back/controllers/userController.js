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

// 모든 유저 정보 가져오기 요청
exports.getAllUsers = asyncHandler(async (req, res) => {
  try {
    const users = await User.find();
    if (users) {
      successResponse(res, 200, "전체 유저 조회했습니다.", users);
    }
  } catch (err) {
    errorResponse(res, 500, err.message);
  }
});

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

// 유저 정보 삭제 요청
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
