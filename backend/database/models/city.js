const mongoose = require("mongoose");

const citySchema = new mongoose.Schema({
  name: String,
  region: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Region",
  },
  country: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Country",
  },
  latitude: String,
  longitude: String,
  wikiDataId: String,
});

module.exports = mongoose.model("City", citySchema);
