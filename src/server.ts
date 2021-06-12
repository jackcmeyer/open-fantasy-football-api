import app from './app';

const server = app({
  logger: {
    level: 'info',
    prettyPrint: true,
  },
});

server.listen(process.env.PORT || 3000, '0.0.0.0', (error) => {
  if (error) {
    process.exit(1);
  }
});
