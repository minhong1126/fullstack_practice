const asyncHandler = require("express-async-handler");
const Member = require("../../models/memberModel");
const { errorResponse, successResponse } = require("../../utils/response");

exports.addMember = asyncHandler(async (req, res) => {});

exports.patchMember = asyncHandler(async (req, res) => {});

exports.getMember = asyncHandler(async (req, res) => {});

exports.removeMember = asyncHandler(async (req, res) => {});
