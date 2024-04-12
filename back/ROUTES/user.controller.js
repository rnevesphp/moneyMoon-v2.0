const express = require("express");
const crypto = require("crypto");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("rota usuario ativada");
});

module.exports = router;