const mongoose = require("mongoose");

const floorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  numberFloor: {
    type: Number,
    required: true,
  },
  description: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Floor", floorSchema);
