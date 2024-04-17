const express = require('express');

const app = express();

function loggerMiddleware(request, response, next) {
  console.log('Nouvelle requête entrante');
  next();
}

app.use(loggerMiddleware);

app.get('/hello', (req, res) => {
  res.send('hello');
});

app.listen(3000, () => {
  console.log('Le serveur écoute sur le port 3000');
});
