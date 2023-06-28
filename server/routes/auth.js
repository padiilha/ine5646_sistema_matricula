const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, professor) => {
    if (err) return res.sendStatus(403);
    req.user = professor;
    next();
  });
};

router.get("/", authenticateToken, async (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
