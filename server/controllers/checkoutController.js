const Checkout = require("../models/Checkout");

exports.saveCheckout = async (req, res) => {
  try {
    const { fullName, email, address, paymentMethod } = req.body;

    const newCheckout = new Checkout({
      fullName,
      email,
      address,
      paymentMethod,
    });

    await newCheckout.save();

    return res.status(201).json({
      success: true,
      message: "Checkout saved successfully!",
    });
  } catch (error) {
    console.error("Error saving checkout:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while saving checkout.",
    });
  }
};
