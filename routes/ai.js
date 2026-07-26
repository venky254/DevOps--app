const express = require("express");
const router = express.Router();
const { askAI } = require("../services/aiService");

router.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    const answer = await askAI(message);

    res.json({
      success: true,
      answer,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

module.exports = router;