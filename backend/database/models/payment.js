const moongose = require("mongoose");

const paymentSchema = new moongose.Schema({
  booking: {
    type: moongose.Schema.Types.ObjectId,
    ref: "Booking",
  },
  paymentDate: {
    type: Date,
    default: Date.now,
  },
  paymentAmount: {
    type: Number,
    required: true,
  },
  extraPayment: {
    type: Number,
  },
  paymentMethod: {
    type: String,
    enum: [
      "Cash",
      "Credit Card",
      "Debit Card",
      "Paypal",
      "Visa",
      "Master Card",
    ],
    default: "Cash",
    required: true,
  },
  paymentStatus: {
    type: String,
    enum: ["Paid", "Unpaid", "underpayment"],
    required: true,
  },
});

module.exports = moongose.model("Payment", paymentSchema);
