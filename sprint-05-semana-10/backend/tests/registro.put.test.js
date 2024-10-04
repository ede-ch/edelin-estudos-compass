const request = require('supertest');
const mongoose = require('mongoose');
const { app } = require('../index');
const { MongoMemoryServer } = require('mongodb-memory-server');

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.disconnect();
  await mongoose.connect(uri);
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe('PUT /registros/:id', () => {
  it('deve atualizar um registro existente', async () => {
    // Criar um registro para ser atualizado
    const novoRegistro = { url: 'http://example.com', nome: 'Exemplo', descricao: 'Um site de exemplo' };
    const createdRecord = await request(app).post('/registros').send(novoRegistro);

    const updatedData = { url: 'http://updated.com', nome: 'Atualizado', descricao: 'Um site atualizado' };

    const response = await request(app)
      .put(`/registros/${createdRecord.body._id}`)
      .send(updatedData)
      .expect(200);

    expect(response.body.url).toBe(updatedData.url);
    expect(response.body.nome).toBe(updatedData.nome);
    expect(response.body.descricao).toBe(updatedData.descricao);
  });

  it('deve retornar erro 404 se o registro não for encontrado', async () => {
    const invalidId = new mongoose.Types.ObjectId();
    const updatedData = { url: 'http://updated.com', nome: 'Atualizado', descricao: 'Um site atualizado' };

    const response = await request(app)
      .put(`/registros/${invalidId}`)
      .send(updatedData)
      .expect(404);

    expect(response.body.message).toBe('Registro não encontrado');
  });
});
