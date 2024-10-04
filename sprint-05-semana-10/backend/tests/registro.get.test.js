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

describe('GET /registros', () => {
  it('deve retornar todos os registros', async () => {
    const response = await request(app)
      .get('/registros')
      .expect(200);

    expect(Array.isArray(response.body)).toBe(true);
  });
});
