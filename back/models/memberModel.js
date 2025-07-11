const { Schema, model, Types } = require("mongoose");

const teamMemberSchema = new Schema(
  {
    team: {
      type: Types.ObjectId,
      ref: "Team",
      required: true,
    },
    user: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },
    role: {
      type: String,
      enum: ["OWNER", "ADMIN", "MEMBER"],
      default: "MEMBER",
    },
    status: {
      type: String,
      enum: ["BEFORE_WORK", "WORKING", "ON_LEAVE", "AFTER_WORK", "AWAY"],
      default: "BEFORE_WORK",
    },
    joinedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const TeamMember = model("TeamMember", teamMemberSchema);
module.exports = TeamMember;
