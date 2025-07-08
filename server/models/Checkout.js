const mongoose = require("mongoose");

const CheckoutSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  paymentMethod: { type: String, required: true },
});

module.exports = mongoose.model("Checkout", CheckoutSchema);
