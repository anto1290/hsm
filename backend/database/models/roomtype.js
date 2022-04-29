const mongoose = require("mongoose");

const RoomTypeSchema = new mongoose.Schema(
  {
    nameType: {
      type: String,
      required: true,
    },
    codeType: {
      type: String,
      required: true,
    },
    imageType: {
      type: String,
    },
    image: [
      {
        type: String,
      },
    ],
    description: {
      type: String,
      required: true,
    },
    baseOccupancy: {
      type: Number,
      required: true,
    },
    kidsOccupancy: {
      type: Number,
    },
    amenities: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Amenitie",
      },
    ],
    typeBed: {
      type: String,
      enum: ["Single", "Twin", "Double", "Queen", "King"],
    },
    extraBed: {
      type: Number,
      default: 0,
    },
    maxOccupancy: {
      type: Number,
      required: true,
    },
    basePrice: {
      type: Number,
      required: true,
    },
    additionalPersonPrice: {
      type: Number,
      required: true,
      default: 0,
    },
    extraBedPrice: {
      type: Number,
      required: true,
      default: 0,
    },
    typeRoom: {
      type: String,
      enum: ["Rooms", "Halls"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("RoomType", RoomTypeSchema);
