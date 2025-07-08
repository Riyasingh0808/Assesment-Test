const express = require("express");
const router = express.Router();
const { saveCheckout } = require("../controllers/checkoutController");

router.post("/", saveCheckout);

module.exports = router;
