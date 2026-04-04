const express = require("express");
const router = express.Router();
const Requirement = require("../models/Requirement");

router.post("/create", async (req, res) => {
  try {
   const newRequirement = new Requirement(req.body);
    await newRequirement.save();

    res.status(201).json({
      message: "Requirement saved to DB",
      data: newRequirement,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error saving data" });
  }
});

module.exports = router;