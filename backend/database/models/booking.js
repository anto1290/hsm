const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  roomType: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "RoomType",
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  checkin: {
    type: Date,
    required: true,
  },
  checkout: {
    type: Date,
    required: true,
  },
  Occupancy: {
    type: Number,
    required: true,
  },
  kidsOccupancy: {
    type: Number,
    required: true,
    default: 0,
  },
  service: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Service",
    },
  ],
  status: {
    type: String,
    enum: ["Pending", "Confirmed", "Cancelled"],
    default: "Pending",
  },
  paymentStatus: {
    type: String,
    enum: ["Success", "Failed", "Pending"],
    default: "Pending",
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Booking", bookingSchema);
