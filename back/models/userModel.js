const { Schema, model, Types } = require("mongoose");

const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
      maxlength: 20,
    },
    profileImg: {
      type: String,
    },
    teams: [
      {
        type: Types.ObjectId,
        ref: "Team",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
