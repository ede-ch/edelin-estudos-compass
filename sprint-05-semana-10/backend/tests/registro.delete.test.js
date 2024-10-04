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

describe('DELETE /registros/:id', () => {
  it('deve deletar um registro existente', async () => {
    // Criar um registro para ser deletado
    const novoRegistro = { url: 'http://example.com', nome: 'Exemplo', descricao: 'Um site de exemplo' };
    const createdRecord = await request(app).post('/registros').send(novoRegistro);

    const response = await request(app)
      .delete(`/registros/${createdRecord.body._id}`)
      .expect(200);

      expect(response.body.message).toBe('Registro deletado'); 
  });

  it('deve retornar erro 404 se o registro não for encontrado', async () => {
    const invalidId = new mongoose.Types.ObjectId();

    const response = await request(app)
      .delete(`/registros/${invalidId}`)
      .expect(404);

    expect(response.body.message).toBe('Registro não encontrado');
  });
});
