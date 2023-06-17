const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfessorSchema = new Schema({
  id: {
    type: String,
    require: true,
  },
  nome: {
    type: String,
    require: true,
  },
  senha: {
    type: String,
    require: true,
  },
  cpf: {
    type: String,
    require: true,
  },
  departamento: {
    type: String,
  },
});

const Professor = mongoose.model("Professor", ProfessorSchema);

module.exports = Professor;