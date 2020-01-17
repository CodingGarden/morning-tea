const express = require('express');
const morgan = require('morgan');

// const middlewares = require('./middlewares');
const notFound = require('./middlewares/notFound');

const app = express();
app.use(morgan('common'));

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World!'
  });
});

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

const port = process.env.PORT || 4242;
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});