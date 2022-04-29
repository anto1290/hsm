const mongoose = require("mongoose");

const priceSchema = new mongoose.Schema(
  {
    roomType: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "RoomType",
    },
    mon: Number,
    tue: Number,
    wed: Number,
    thu: Number,
    fri: Number,
    sat: Number,
    sun: Number,
    priceType: {
      type: String,
      enum: ["Regular", "Special"],
      default: "Regular",
    },
    special: {
      title: String,
      description: String,
      startDate: Date,
      endDate: Date,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Price", priceSchema);
