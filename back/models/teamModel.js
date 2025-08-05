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
    owner: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Team = model("Team", teamSchema);
module.exports = Team;
