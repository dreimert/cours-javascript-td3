var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Bonjour !');
});

app.use(express.static('views'));

app.post('/nouveau', function (req, res) {
  res.send('Formulaire reçu.');
});

app.listen(8000, function () {
  console.log('Example app listening on port 8000!');
});
