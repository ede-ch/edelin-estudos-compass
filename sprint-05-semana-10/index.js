const express = require('express'); 
const mongoose = require('mongoose');
const registroRoutes = require('./routes/registroRoutes');

const app = express();
const port = 3000;

// Middleware para processar JSON
app.use(express.json());

// Conectar ao MongoDB
mongoose.connect('mongodb+srv://edelinsantospb:5TjB1TBADgwdgZVg@registro-api.ozljj.mongodb.net/?retryWrites=true&w=majority&appName=Registro-API')
.then(() => {
  console.log('Conectado ao MongoDB');
})
.catch(error => {
  console.error('Erro ao conectar ao MongoDB:', error);
});


app.use('/registros', registroRoutes);

// Middleware de erro
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: 'Algo deu errado!', error: err.message });
});


app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});
