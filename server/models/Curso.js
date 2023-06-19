const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CursoSchema = new Schema({
  nome: {
    type: String,
    require: true,
  },
  codigo: {
    type: String,
    require: true,
  },
  duracao: {
    type: Number,
    require: true,
  },
  departamento: {
    type: String,
    require: true,
  },
});

const Curso = mongoose.model("Curso", CursoSchema);

module.exports = Curso;
