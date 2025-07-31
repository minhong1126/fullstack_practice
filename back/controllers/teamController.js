const asyncHandler = require("express-async-handler");
const Team = require("../models/teamModel");

// 팀 생성하기 요청
const createTeam = asyncHandler(async (req, res) => {
  const { name, description, users, creator } = req.body;
  if (!name || !creator) {
    res
      .status(400)
      .json({ success: false, message: "필요한 값이 입력되지 않았습니다." });
  } else {
    const team = await Team.create({ name, description, users, creator });
    if (team) {
      res.status(201).json({ success: true, message: "팀이 생성되었습니다." });
    }
  }
});

// 모든 팀 목록 가져오기 요청
const getAllTeams = asyncHandler(async (req, res) => {
  const teams = await Team.find();
  if (teams) {
    res.status(200).json({
      success: true,
      data: teams,
      message: "팀 목록을 조회했습니다.",
    });
  }
});

// 팀 가져오기 요청
const getTeam = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const team = await Team.findOne(id);
  if (!team) {
    res.status(404).json({ success: false, message: "팀을 찾을 수 없습니다." });
  } else {
    res
      .status(200)
      .json({ success: true, data: team, message: "팀 정보를 조회했습니다." });
  }
});

const patchTeam = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, description, users } = req.body;

  if (!id) {
    return res.json({ message: "id 값이 누락되었습니다." });
  } else {
    const team = await Team.updateOne(
      { _id: id },
      {
        $set: {
          name: name,
          description: description,
          users: users,
        },
      }
    );
    res.status(200).json({
      success: true,
      data: team,
      message: "팀 정보를 수정했습니다.",
    });
  }
});

const deleteTeam = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.json({ message: "id 값이 누락되었습니다." });
  } else {
    try {
      const team = await Team.deleteOne({ _id: id });
      res
        .status(200)
        .json({ success: true, data: team, message: "팀을 삭제했습니다." });
    } catch (err) {
      res
        .status(500)
        .json({ success: false, message: "서버 오류", error: err.message });
    }
  }
});

module.exports = { createTeam, getAllTeams, getTeam, patchTeam, deleteTeam };
