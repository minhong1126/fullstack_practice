const { Schema, model, Types } = require("mongoose");

const memberSchema = new Schema(
  {
    team: {
      type: Types.ObjectId,
      ref: "Team",
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

const Member = model("Member", memberSchema);
module.exports = Member;
