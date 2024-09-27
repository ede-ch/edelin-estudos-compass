const mongoose = require('mongoose');

const RegistroSchema = new mongoose.Schema({
  url: { type: String, required: true },
  nome: { type: String, required: true },
  descricao: { type: String, required: true },
});

const Registro = mongoose.model('Registro', RegistroSchema);
module.exports = Registro;
