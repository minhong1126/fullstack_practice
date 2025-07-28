const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// 유저 생성 요청
const createUser = asyncHandler(async (req, res) => {
  const { email, password, name } = req.body;
  if (!email || !password || !name) {
    res
      .status(400)
      .json({ success: false, message: "필요한 값이 입력되지 않았습니다." });
  } else {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "이메일이 이미 존재합니다." });
    }

    const user = await User.create({ email, password, name });
    res
      .status(201)
      .json({ success: true, data: user, message: "유저가 생성되었습니다." });
  }
});

// 모든 유저 정보 가져오기 요청
const getAllUsers = asyncHandler(async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      success: true,
      data: users,
      message: "유저 목록을 조회했습니다.",
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "서버 오류입니다", error: err.message });
  }
});

// 유저 정보 가져오기 요청
const getUser = asyncHandler(async (req, res) => {
  console.error(req);
  const { id } = req.params;

  if (!id) {
    res.json({ message: "id값이 누락되었습니다." });
  } else {
    try {
      const user = await User.findById(id);
      if (!user) {
        return res
          .status(404)
          .json({ success: false, message: "사용자를 찾을 수 없습니다." });
      }
      res.status(200).json({ success: true, user });
    } catch (err) {
      res
        .status(500)
        .json({ success: false, message: "서버 오류", error: err.message });
    }
  }
});

// 유저 정보 수정 요청
const patchUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, password } = req.body;

  if (!id) {
    return res.json({ message: "id 값이 누락되었습니다." });
  } else {
    try {
      const user = await User.updateOne(
        { _id: id },
        { $set: { name: name, password: password } }
      );

      res.status(200).json({
        success: true,
        data: user,
        message: "유저 정보를 수정했습니다.",
      });
    } catch (err) {
      res
        .status(500)
        .json({ success: false, message: "서버 오류", error: err.message });
    }
  }
});

// 유저 정보 삭제 요청
const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.json({ message: "id 값이 누락되었습니다." });
  } else {
    try {
      const user = await User.deleteOne({ _id: id });
      res
        .status(200)
        .json({ success: true, data: user, message: "유저를 삭제했습니다." });
    } catch (err) {
      res
        .status(500)
        .json({ success: false, message: "서버 오류", error: err.message });
    }
  }
});

module.exports = { getAllUsers, createUser, getUser, patchUser, deleteUser };
