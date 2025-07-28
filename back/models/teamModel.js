const { Schema, model, Types } = require("mongoose");

const teamSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 20,
    },
    description: {
      type: String,
    },
    users: [
      {
        type: Types.ObjectId,
        ref: "User",
        required: true,
      },
    ],
    creator: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    timestamps: true,
  }
);

const Team = model("Team", teamSchema);
module.exports = Team;
