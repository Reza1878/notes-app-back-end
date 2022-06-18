const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    host: 'localhost',
    port: '5000',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  await server.start();
  server.route(routes);
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
