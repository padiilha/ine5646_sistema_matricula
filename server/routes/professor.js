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

router.patch("/professor/update/:id", async (req, res) => {
  try {
    professor = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(professor);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});

router.getOne("/professor/getOne", async (req, res) => {
  professor = await Professor.find;
});

module.exports = router;
