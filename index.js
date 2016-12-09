var express = require('express');
var bodyParser = require('body-parser');
var app = express();

let sondages = [ { question: 'Sondage de démonstration ?', options1: 'oui', options2: 'non' } ];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.send('Bonjour !');
});

// En déclarant avant express.static, on intercepte l'appel avant lui.
app.get('/liste.html', function (req, res) {
  let liste = sondages.map(function(sondage, index){
    return `<li><a href="/sondage/${index}">${sondage.question}</a></li>`;
  });

  let html = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8" />
            <title>Nouveau sondage</title>
        </head>
        <body>
          <ul>
            ${liste.join('\n')}
          </ul>
        </body>
    </html>
  `;

  res.send(html);
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
