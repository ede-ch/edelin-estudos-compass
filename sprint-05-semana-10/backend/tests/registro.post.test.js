const request = require('supertest');
const mongoose = require('mongoose');
const { app } = require('../index'); 
const { MongoMemoryServer } = require('mongodb-memory-server');

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.disconnect(); // Desconectar para evitar conflito
  await mongoose.connect(uri); 
});


afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe('POST /registros', () => {
  it('deve criar um novo registro', async () => {
    const novoRegistro = {
      url: 'http://example.com',
      nome: 'Exemplo',
      descricao: 'Um site de exemplo',
    };

    const response = await request(app)
      .post('/registros')
      .send(novoRegistro)
      .expect(201);

    expect(response.body.url).toBe(novoRegistro.url);
    expect(response.body.nome).toBe(novoRegistro.nome);
    expect(response.body.descricao).toBe(novoRegistro.descricao);
  });

  it('deve retornar erro 400 se os dados forem inválidos', async () => {
    const registroInvalido = {
      url: '',
      nome: 'Faltando URL',
      descricao: 'Descrição sem URL',
    };

    const response = await request(app)
      .post('/registros')
      .send(registroInvalido)
      .expect(400);

    expect(response.body.message).toBe('Erro ao criar registro');
  });
});
