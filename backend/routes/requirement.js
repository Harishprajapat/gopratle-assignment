const express = require("express");
const router = express.Router();

router.post("/create", async (req, res) => {
  try {
    const data = req.body;

    console.log("Received Data:", data);

    res.status(200).json({
      message: "Requirement created successfully",
      data,
    });

  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;