const { Schema, model } = require("mongoose");

const teamSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: 20,
  },
  description: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Team = model("Team", teamSchema);
module.exports(Team);
