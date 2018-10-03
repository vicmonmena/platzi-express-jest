import request from 'supertest';
const app = require('../app')

describe('Probando el servidor. Response codes 200',() => {
  test('Se espera un 200', done => {
    request(app).get('/').then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    })
  })
})