var express = require('express');
var bodyParser = require('body-parser');
var app = express();

let sondages = [];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.send('Bonjour !');
});

app.use(express.static('views'));

app.post('/nouveau', function (req, res) {
  res.send('Formulaire reçu.');
  sondages.push(req.body);
  console.log(sondages);
});

app.listen(8000, function () {
  console.log('Example app listening on port 8000!');
});
