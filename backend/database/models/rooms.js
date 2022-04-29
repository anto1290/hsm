const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema(
  {
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
    typeRoom: {
      type: String,
      enum: ["Rooms", "Halls"],
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Room", roomSchema);
