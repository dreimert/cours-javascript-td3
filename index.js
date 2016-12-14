var express = require('express');
var bodyParser = require('body-parser');
var app = express();

let sondages = [ { question: 'Sondage de démonstration ?', options1: 'oui', options2: 'non' , reponses: []} ];

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
  req.body.reponses = [];
  sondages.push(req.body);
  console.log(sondages);
});

let sondageExiste = function(req, res, next) {
  let sondage = sondages[req.params.id];
  if(sondage) {
    req.sondage = sondage;
    next();
  } else {
    res.send("Sondage introuvable.");
  }
}

app.get('/sondage/:id', sondageExiste, function (req, res) {
  let html = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8" />
            <title>${req.sondage.question}</title>
        </head>

        <body>
          <h1>${req.sondage.question}</h1>
          <form action="/sondage/${req.params.id}" method="post">
            <div id="options">
              ${req.sondage.options1} <input type="radio" name="options" value="${req.sondage.options1}" /><br />
              ${req.sondage.options2} <input type="radio" name="options" value="${req.sondage.options2}" /><br />
            </div>
            <input type="submit" value="Voter" />
          </form>
        </body>
    </html>
  `;

  res.send(html);

});

app.post('/sondage/:id', sondageExiste, function (req, res) {
  req.sondage.reponses.push(req.body.options);
  res.send("Votre réponse a été enregistré");
  console.log(req.sondage);
});

app.listen(8000, function () {
  console.log('Example app listening on port 8000!');
});
