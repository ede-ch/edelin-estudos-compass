const Registro = require('../models/Registro');

exports.getRegistros = async (req, res) => {
  try {
    const registros = await Registro.find();
    res.status(200).send(registros);
  } catch (error) {
    res.status(500).send({ message: 'Erro ao buscar registros', error });
  }
};

exports.createRegistro = async (req, res) => {
  try {
    const registro = new Registro(req.body);
    await registro.save();
    res.status(201).send(registro);
  } catch (error) {
    res.status(400).send({ message: 'Erro ao criar registro', error });
  }
};

exports.updateRegistro = async (req, res) => {
  try {
    const registro = await Registro.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!registro) {
      return res.status(404).send({ message: 'Registro não encontrado' });
    }
    res.status(200).send(registro); 
  } catch (error) {
    res.status(400).send({ message: 'Erro ao atualizar registro', error });
  }
};


exports.deleteRegistro = async (req, res) => {
  try {
    const registro = await Registro.findByIdAndDelete(req.params.id);
    if (!registro) {
      return res.status(404).send({ message: 'Registro não encontrado' });
    }
    res.status(200).send({ message: 'Registro deletado' });
  } catch (error) {
    res.status(500).send({ message: 'Erro ao deletar registro', error });
  }
};

