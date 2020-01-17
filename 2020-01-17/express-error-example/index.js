const express = require('express');
const Joi = require('@hapi/joi');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Hi there!',
  });
});

const catSchema =  Joi.object({
  name: Joi.string()
      .alphanum()
      .min(2)
      .max(10)
      .required(),
  age: Joi
      .number()
      .min(0)
      .required(),
  livesLeft: Joi
      .number()
      .min(0)
      .max(9)
      .required(),
  attitude: Joi
      .number()
      .min(-10)
      .max(10)
      .required(),
});

app.post('/cats', async (req, res, next) => {
  try {
    const result = await catSchema.validateAsync(req.body);
    res.json(result);
  } catch (error) {
    next(error);
  }
});

app.use((req, res, next) => {
  res.statusCode = 404;
  next(new Error('Not Found'));
});

app.use((error, req, res, next) => {
  const result = {
    message: error.message,
    stack: error.stack,
  };
  
  if (error.name === 'ValidationError') {
    res.statusCode = 422;
    result.details = error.details;
  }

  res.status(res.statusCode === 200 ? 500 : res.statusCode);
  res.json(result);
});


app.listen(1017, () => {
  console.log(`Listening on http://localhost:1017`);
});