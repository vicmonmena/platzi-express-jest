import request from 'supertest';
const app = require('../app')

describe('Probando el servidor. Response codes 200',() => {
  test('Se espera un 200', done => {
    request(app).get('/').then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    })
  })

  test('Se espera un 200 y status true', done => {
    request(app).get('/').then((response) => {
      //console.log(response)
      expect(response.statusCode).toBe(200);
      //expect(response.body.status).toBe(false); //  te da igual lo que venga solon espera que sea TRUE
      expect(response.body.message).toBeTruthy(); //  te da igual lo que venga solon espera que sea TRUE
      done();
    })
  })

  test('Se espera un 404 y status true', done => {
    request(app).get('/error').then((response) => {
      //console.log(response)
      expect(response.statusCode).toBe(404);
      done();
    })
  })
})