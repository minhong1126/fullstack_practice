const asyncHandler = require("express-async-handler");
const Team = require("../models/teamModel");

const createTeam = asyncHandler(async (req, res) => {
  const { name, description, users, creator } = req.body;
  if (!name || !creatorId) {
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

module.exports = { createTeam, getAllTeams };
