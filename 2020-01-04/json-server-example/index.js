const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

const authMiddleware = require('./auth');
const errorHandlerMiddleware = require('./error-handler');

server.use(authMiddleware);
server.use(errorHandlerMiddleware)
server.use(middlewares)
server.use(router)
server.listen(4242, () => {
  console.log('JSON Server is running')
})