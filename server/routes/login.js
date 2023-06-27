const express = require("express");
const router = express.Router();

router.post("/login", async (req, res) => {
  const professor = await Professor.find({
    cpf: req.body.cpf,
    senha: req.body.senha,
  });

  res.json(professor);
});

module.exports = router;
