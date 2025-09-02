const express = require("express");
const router = express.Router();

// Example route for owners
router.get("/", (req, res) => {
  res.send("users route");
});

module.exports = router;
