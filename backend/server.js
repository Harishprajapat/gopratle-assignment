const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const requirementRoutes = require("./routes/requirement");
const app = express();

const uri = process.env.MONGO_URL;

app.use(cors());
app.use(express.json());
app.use("/api/requirement", requirementRoutes);

app.get("/", (req, res) => {
  res.send("API Running 🚀");
});

mongoose.connect(uri)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});