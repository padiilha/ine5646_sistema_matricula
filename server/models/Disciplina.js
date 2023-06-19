const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DisciplinaSchema = new Schema({
  nome: {
    type: String,
    require: true,
  },
  codigo: {
    type: String,
    require: true,
  },
  carga_horaria: {
    type: Number,
    require: true,
  },
  requisitos: {
    type: Array,
  },
  horario_aulas: {
    type: Array,
  },
  departamento: {
    type: String,
    require: true,
  },
});

const Disciplina = mongoose.model("Disciplina", DisciplinaSchema);

module.exports = Disciplina;
