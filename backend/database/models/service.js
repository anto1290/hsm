const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  roomType: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "RoomType",
      required: true,
    },
  ],
  price: {
    type: Number,
    required: true,
  },
  typePrice: {
    type: String,
    enum: ["Per Night", "Per Person", "Fixed Price"],
    default: "Per Night",
  },
  description: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    default: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Service", serviceSchema);
