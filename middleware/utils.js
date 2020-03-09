const logger = (request, response, next) => {
  console.log(`${request.method} -- ${request.url}`);
  next();
};

const methodNotAllowed = (request, response) => {
  response.status(405).json({ message: 'Method Not Allowed.' });
};

const notFound = (request, response) => {
  response
    .status(404)
    .send('<h1>404</h1><h3>You used splash! It was not effective.</h3>');
};

module.exports = {
  logger,
  methodNotAllowed,
  notFound
};
