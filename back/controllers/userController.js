const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const createUser = asyncHandler(async (req, res) => {
  const { email, password, name } = req.body;
  const user = await User.create({ email, password, name });
  res.status(201).json(user);
});

const getAllUsers = asyncHandler(async (req, res) => {});

module.exports = { getAllUsers, createUser };
