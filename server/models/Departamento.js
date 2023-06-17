const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DepartamentoSchema = new Schema({
  id: {
    type: String,
    require: true,
  },
  nome: {
    type: String,
    require: true,
  },
  codigo: {
    type: String,
    require: true,
  },
  disciplinas: {
    type: Array,
  },
});

const Departamento = mongoose.model("Departamento", DepartamentoSchema);

module.exports = Departamento;