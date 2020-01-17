module.exports = (error, req, res, next) => {
  res.status(res.statusCode === 200 ? 500 : res.statusCode);
  res.json({
    message: error.message,
    stack: error.stack,
  });
};
