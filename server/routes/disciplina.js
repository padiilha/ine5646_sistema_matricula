const express = require("express");
const router = express.Router();

const Disciplina = require("../models/Disciplina");

router.get("/", async (req, res) => {
  const disciplinas = await Disciplina.find();

  res.json(disciplinas);
});

router.post("/new", async (req, res) => {
  const disciplina = req.body;
  const newDisciplina = new Disciplina(disciplina);
  await newDisciplina.save();

  res.json(disciplina);
});

router.delete("/delete/:id", async (req, res) => {
  const result = await Disciplina.findByIdAndDelete(req.params.id);

  res.json(result);
});

module.exports = router;
