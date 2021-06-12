import supertest from 'supertest';
import app from '../src/app';

describe('ping', () => {
  it('should respond with status up', async () => {
    const server = app();
    await server.ready();

    const response = await supertest(server.server).get('/ping');

    expect(response.status).toEqual(200);
    expect(response.body).toEqual(expect.objectContaining({ status: 'UP' }));

    server.close();
  });
});
