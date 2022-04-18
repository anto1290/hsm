const mongoose = require("mongoose");

const designationSchema = new mongoose.Schema({
  nameDesignation: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Designation", designationSchema);
