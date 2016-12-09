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

app.get('/sondage/:id', function (req, res) {
  id = parseInt(req.params.id);
  let sondage = sondages[id];
  if(sondage !== undefined) {
    let html = `
      <!DOCTYPE html>
      <html>
          <head>
              <meta charset="utf-8" />
              <title>${sondage.question}</title>
          </head>

          <body>
            <h1>${sondage.question}</h1>
            <form action="/sondage/${id}" method="post">
              <div id="options">
                ${sondage.options1} <input type="radio" name="options" value="${sondage.options1}" /><br />
                ${sondage.options2} <input type="radio" name="options" value="${sondage.options2}" /><br />
              </div>
              <input type="submit" value="Voter" />
            </form>
          </body>
      </html>
    `;


    res.send(html);
  } else {
    res.send("Sondage introuvable.");
  }
});

app.listen(8000, function () {
  console.log('Example app listening on port 8000!');
});
