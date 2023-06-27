const express = require("express");
const router = express.Router();

const Professor = require("../models/Professor");

router.get("/", async (req, res) => {
  const professores = await Professor.find();

  res.json(professores);
});

router.post("/new", async (req, res) => {
  const professor = req.body;
  const newProfessor = new Professor(professor);
  await newProfessor.save();

  res.json(professor);
});

router.delete("/professor/delete/:id", async (req, res) => {
  const result = await Professor.findByIdAndDelete(req.params.id);

  res.json(result);
});

module.exports = router;
