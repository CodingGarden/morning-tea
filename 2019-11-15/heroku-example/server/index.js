const app = require('express')();

app.get('/', (req, res) => {
  res.json({
    message: 'Wassssup?'
  });
});

app.listen(process.env.PORT || 1942);