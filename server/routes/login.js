const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

const Professor = require("../models/Professor");

router.post("/", async (req, res) => {
  const professor = await Professor.find({
    cpf: req.body.cpf,
    senha: req.body.senha,
  });

  console.log(professor);
  if (professor.length === 0) res.json(professor);
  else {
    const accessToken = jwt.sign(req.body.cpf, process.env.ACCESS_TOKEN_SECRET);

    res.json({ accessToken: accessToken });
  }
});

module.exports = router;
