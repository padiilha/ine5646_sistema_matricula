const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb+srv://padilhacaua:qD8iuJM8SiO4skZO@cluster0.efjkuxt.mongodb.net/sistema_matricula", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to DB"))
  .catch(console.error);

const Curso = require("./models/Curso");
const Departamento = require("./models/Departamento");
const Disciplina = require("./models/Disciplina");
const Estudante = require("./models/Estudante");
const Professor = require("./models/Professor");

app.get("/cursos", async (req, res) => {
  const cursos = await Curso.find();

  res.json(cursos);
});

app.post("/curso/new", async (req, res) => {
  const curso = req.body;
  const newCurso = new Curso(curso);
  await newCurso.save();

  res.json(curso);
});

app.delete("/curso/delete/:id", async (req, res) => {
  const result = await Curso.findByIdAndDelete(req.params.id);

  res.json(result);
});

app.get("/departamentos", async (req, res) => {
  const departamentos = await Departamento.find();

  res.json(departamentos);
});

app.post("/departamento/new", async (req, res) => {
  const departamento = req.body;
  const newDepartamento = new Departamento(departamento);
  await newDepartamento.save();

  res.json(departamento);
});

app.delete("/departamento/delete/:id", async (req, res) => {
  const result = await Departamento.findByIdAndDelete(req.params.id);

  res.json(result);
});

app.get("/disciplinas", async (req, res) => {
  const disciplinas = await Disciplina.find();

  res.json(disciplinas);
});

app.post("/disciplina/new", async (req, res) => {
  const disciplina = req.body;
  const newDisciplina = new Disciplina(disciplina);
  await newDisciplina.save();

  res.json(disciplina);
});

app.delete("/disciplina/delete/:id", async (req, res) => {
  const result = await Disciplina.findByIdAndDelete(req.params.id);

  res.json(result);
});

app.get("/estudantes", async (req, res) => {
  const estudantes = await Estudante.find();

  res.json(estudantes);
});

app.post("/estudante/new", async (req, res) => {
  const estudante = req.body;
  const newEstudante = new Estudante(estudante);
  await newEstudante.save();

  res.json(estudante);
});

app.delete("/estudante/delete/:id", async (req, res) => {
  const result = await Estudante.findByIdAndDelete(req.params.id);

  res.json(result);
});

app.get("/professores", async (req, res) => {
  const professores = await Professor.find();

  res.json(professores);
});

app.post("/professor/new", async (req, res) => {
  const professor = req.body;
  const newProfessor = new Professor(professor);
  await newProfessor.save();

  res.json(professor);
});

app.delete("/professor/delete/:id", async (req, res) => {
  const result = await Professor.findByIdAndDelete(req.params.id);

  res.json(result);
});

app.post("/login", async (req, res) => {
  const professor = await Professor.find({
    cpf: req.body.cpf,
    senha: req.body.senha,
  });
  
  res.json(professor);
});

const port = 8080;
app.listen(port, () => console.log(`Server start on port ${port}`));
