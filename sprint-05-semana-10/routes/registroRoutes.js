const express = require('express');
const router = express.Router();
const registroController = require('../controllers/registroController');

// Rota para obter todos os registros
router.get('/', registroController.getRegistros);

// Rota para criar um novo registro
router.post('/', registroController.createRegistro);

// Rota para atualizar um registro existente
router.put('/:id', registroController.updateRegistro);

// Rota para deletar um registro
router.delete('/:id', registroController.deleteRegistro);

module.exports = router;
