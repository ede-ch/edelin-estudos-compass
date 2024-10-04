const express = require('express'); 
const mongoose = require('mongoose');
const registroRoutes = require('./routes/registroRoutes'); 

const app = express();
const port = 3001;

// Middleware para processar JSON
app.use(express.json());

// Usar rotas
app.use('/registros', registroRoutes);

// Middleware de erro
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: 'Algo deu errado!', error: err.message });
});

// Função para conectar ao MongoDB
async function connectDB() {
  try {
    await mongoose.connect('mongodb+srv://edelinsantospb:5TjB1TBADgwdgZVg@registro-api.ozljj.mongodb.net/?retryWrites=true&w=majority&appName=Registro-API', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conectado ao MongoDB');
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error);
  }
}

// Iniciar o servidor se não estiver sendo executado em ambiente de teste
if (process.env.NODE_ENV !== 'test') {
  connectDB();
  app.listen(port, () => {
    console.log(`App rodando na porta ${port}`);
  });
}

module.exports = { app, connectDB };
