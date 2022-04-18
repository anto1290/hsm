const mongoose = require("mongoose");

const statusRoomSchema = new mongoose.Schema({
  nameStatus: {
    type: String,
    required: true,
  },
  codeName: {
    type: String,
    required: true,
    unique: true,
    maxlength: 4,
  },
  description: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("StatusRoom", statusRoomSchema);
