import Fastify, { FastifyInstance } from 'fastify';

export default function build(options = {}) {
  const app: FastifyInstance = Fastify(options);

  app.get('/ping', async () => ({
    status: 'UP',
    date: new Date().toString(),
  }));

  return app;
}
