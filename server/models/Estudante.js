const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EstudanteSchema = new Schema({
  nome: {
    type: String,
    required: true,
  },
  senha: {
    type: String,
    required: true,
  },
  cpf: {
    type: String,
    require: true,
  },
  matricula: {
    type: String,
    require: true,
  },
  curso: {
    type: String,
    require: true,
  },
  semestre_ingresso: {
    type: String,
    require: true,
  },
});

const Estudante = mongoose.model("Estudante", EstudanteSchema);

module.exports = Estudante;
