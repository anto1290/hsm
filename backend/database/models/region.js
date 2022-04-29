const mongoose = require("mongoose");

const regionSchema = new mongoose.Schema({
  name: String,
  country: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Country",
  },
  region_code: String,
  latitude: Number,
  longitude: Number,
});

module.exports = mongoose.model("Region", regionSchema);
