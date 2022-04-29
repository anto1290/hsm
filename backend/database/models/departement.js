const mongoose = require("mongoose");

const departementSchema = new mongoose.Schema(
  {
    nameDepartement: {
      type: String,
      required: true,
    },
    codeDepartement: {
      type: String,
      maxlength: 5,
      minlength: 1,
      required: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Departement", departementSchema);
