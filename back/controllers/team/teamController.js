const asyncHandler = require("express-async-handler");
const Team = require("../../models/teamModel");
const { errorResponse, successResponse } = require("../../utils/response");

// 팀 생성 요청
exports.createTeam = asyncHandler(async (req, res) => {
  const { name, description, users, creator } = req.body;
  if (!name || !creator) {
    errorResponse(res, 400, "필요한 값이 입력되지 않았습니다.");
  } else {
    try {
      const team = await Team.create({ name, description, users, creator });
      if (team) {
        successResponse(res, 201, "팀이 생성되었습니다.", team);
      }
    } catch (err) {
      errorResponse(res, 500, err.message);
    }
  }
});

// 모든 팀 목록 가져오기 요청
exports.getAllTeams = asyncHandler(async (req, res) => {
  try {
    const teams = await Team.find();
    if (teams) {
      successResponse(res, 200, "전체 팀을 조회했습니다.", teams);
    }
  } catch (err) {
    errorResponse(res, 500, err.message);
  }
});

// 팀 가져오기 요청
exports.getTeam = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const team = await Team.findOne(id);
    if (!team) {
      errorResponse(res, 404, "해당하는 팀이 존재하지 않습니다.");
    } else {
      successResponse(res, 200, "팀 정보를 조회했습니다.", team);
    }
  } catch (err) {
    errorResponse(res, 500, err.message);
  }
});

// 팀 수정 요청
exports.patchTeam = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, description, users } = req.body;

  try {
    if (!(await Team.findOne(id))) {
      errorResponse(res, 404, "해당하는 팀이 존재하지 않습니다.");
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
      successResponse(res, 200, "팀 정보를 수정했습니다.", team);
    }
  } catch {
    errorResponse(res, 500, err.message);
  }
});

// 팀 삭제 요청
exports.deleteTeam = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    if (!(await Team.findOne(id))) {
      errorResponse(res, 404, "해당하는 팀이 존재하지 않습니다.");
    } else {
      const team = await Team.deleteOne({ _id: id });
      successResponse(res, 200, "팀 정보를 삭제했습니다.");
    }
  } catch {
    errorResponse(res, 500, err.message);
  }
});
