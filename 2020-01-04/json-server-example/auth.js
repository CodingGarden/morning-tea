module.exports = (req, res, next) => {
  // there are better ways
  if (req.get('dumb-auth-dont-do-this-password') === 'secret') {
    next();
  } else {
    res.status(401);
    next(new Error('Un-Authorized'));
  }
};
