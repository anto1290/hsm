const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  floor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Floor",
  },
  roomType: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "RoomType",
  },
  statusRoom: {
    type: mongoose.Schema.ObjectId,
    ref: "StatusRoom",
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active",
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Room", roomSchema);
