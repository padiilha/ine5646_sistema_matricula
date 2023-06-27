const express = require("express");
const router = express.Router();

const Professor = require("../models/Professor");

router.post("/", async (req, res) => {
  const professor = await Professor.find({
    cpf: req.body.cpf,
    senha: req.body.senha,
  });

  res.json(professor);
});

module.exports = router;
