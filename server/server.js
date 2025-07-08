const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const checkoutRoutes = require("./routes/checkoutRoutes");
require("dotenv").config();

const app = express();
const PORT = 5000;

const MONGO_URI = process.env.MONGO_URL;

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to database"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use(cors());
app.use(bodyParser.json());

app.use("/api/checkout", checkoutRoutes);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
