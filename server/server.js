const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/sistema_matricula", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to DB"))
  .catch(console.error);

const Curso = require('./models/Curso');
const Departamento = require('./models/Departamento');
const Disciplina = require('./models/Disciplina');
const Estudante = require('./models/Estudante');
const Professor = require('./models/Professor');

app.get('/cursos', async (req, res) => {
  const cursos = await Curso.find();

  res.json(cursos);
});

app.post('/curso/new', (req, res) => {
  const curso = new Curso({
    id: req.body.id,
    nome: req.body.nome,
    codigo: req.body.codigo,
    duracao: req.body.duracao,
    departamento: req.body.departamento,
  });

  curso.save();

  res.json(curso);
});

app.delete('/curso/delete/:id', async (req, res) => {
  const result = await Curso.findByIdAndDelete(req.params.id);

  res.json(result);
});

app.get('/departamentos', async (req, res) => {
  const departamentos = await Departamento.find();

  res.json(departamentos);
});

app.post('/departamento/new', (req, res) => {
  const departamento = new Curso({
    id: req.body.id,
    nome: req.body.nome,
    codigo: req.body.codigo,
  });

  departamento.save();

  res.json(departamento);
});

app.delete('/departamento/delete/:id', async (req, res) => {
  const result = await Departamento.findByIdAndDelete(req.params.id);

  res.json(result);
});

app.get('/disciplinas', async (req, res) => {
  const disciplinas = await Disciplina.find();

  res.json(disciplinas);
});

app.post('/disciplina/new', (req, res) => {
  const disciplina = new Disciplina({
    id: req.body.id,
    nome: req.body.nome,
    codigo: req.body.codigo,
    carga_horaria: req.body.carga_horaria,
    departamento: req.body.departamento,
  });

  disciplina.save();

  res.json(disciplina);
});

app.delete('/disciplina/delete/:id', async (req, res) => {
  const result = await Disciplina.findByIdAndDelete(req.params.id);

  res.json(result);
});

app.get('/estudantes', async (req, res) => {
  const estudantes = await Estudante.find();

  res.json(estudantes);
});

app.post('/estudante/new', (req, res) => {
  const estudante = new Estudante({
    id: req.body.id,
    nome: req.body.nome,
    senha: req.body.senha,
    cpf: req.body.cpf,
    matricula: req.body.matricula,
    curso: req.body.curso,
    semestre_ingresso: req.body.semestre_ingresso,
  });

  estudante.save();

  res.json(estudante);
});

app.delete('/estudante/delete/:id', async (req, res) => {
  const result = await Estudante.findByIdAndDelete(req.params.id);

  res.json(result);
});

app.get('/professores', async (req, res) => {
  const professores = await Professor.find();

  res.json(professores);
});

app.post('/professor/new', (req, res) => {
  const professor = new Professor({
    id: req.body.id,
    nome: req.body.nome,
    senha: req.body.senha,
    cpf: req.body.cpf,
  });

  professor.save();

  res.json(professor);
});

app.delete('/professor/delete/:id', async (req, res) => {
  const result = await Professor.findByIdAndDelete(req.params.id);

  res.json(result);
});

app.listen(8080, () => console.log("Server start on port 8080"));