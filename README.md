# Cours de Javascript : TD 3 - étape 3

## Cahier des charges

Après avoir livré la commande du client, celui-ci revient vers vous et vous demande de rajouter :

* Un sondage peut avoir entre 2 et 10 réponses possibles. Il aimerait un bouton sur la page qui permet de rajouter les champs réponses un à un. Il accepte qu'il y est du Javascript pour ça dans la page.
* Pour des raisons de sécurité, il aimerait que les données soient stockées sur le disque.
* Il aimerait une interface de visualisation des résultats.

Ayant beaucoup plus confiance en vous, il vous laisse libre sur l'implémentation.

## La manipulation du DOM en Javascript

Pour faire simple, le DOM est une structure de données qui permet de lire et de manipuler la structure HTML de la page.

En Javascript, on peut accèder au DOM via l'object `document`. Pour avoir une idée exhaustive de ce que cet objet peut faire vous pouvez aller voir sa [documentation](exhaustive).

Il y a trois fonctions qui vont nous être particulièrement utiles : [`document.createElement`](https://developer.mozilla.org/fr/docs/Web/API/Document/createElement), [`document.getElementById`](https://developer.mozilla.org/fr/docs/Web/API/Document/getElementById) et [`element.appendChild`](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild).

À l'aide de ces fonctions, de l'exemple du [cours](http://cours.reimert.fr/javascript.html#/27/1) et du reste de l'univers, modifier la page de création de sondages pour répondre à la demande du client.

Pour simplifier l'écriture, vous pouvez écrire directement le code javascript dans une balise *script* du document HTML.

## Base de données

Le fait que les sondages s'effacent à chaque modification du code ou relancement du serveur n'est pas acceptable en production et est désagréable en dévelopement. La solution est d'utiliser une base de données.

Dans les technologies webs, les bases de données dites [NoSQL](https://fr.wikipedia.org/wiki/NoSQL) prennent une place de plus en plus importantes. Une des plus connue est [MongoDB](https://www.mongodb.com/fr).

Pour des raisons techniques et pratique comme le faite que MongoDB n'est pas forcèment installé sur votre machine, nous allons utiliser [NeDB](https://github.com/louischatriot/nedb) qui reprend un API proche de MongoDB.

En utilisant la [documentation de NeDB](https://github.com/louischatriot/nedb), modifier votre code pour stocker les sondages dans la base de données.

Cette base affecte automatiquement un *id* aux sondages. Vous pouvez vous en servir comme identifiant dans les urls de sondages.

## Dissocier la génération de la page HTML du code Javascript

Quand la page HTML devient complexe ou tout simplement pour séparer proprement le rendu du fonctionnement du serveur, il est pratique d'utiliser un moteur de modèle.

À l'aide de la [documentation des moteurs de modèle d'Express](http://expressjs.com/fr/guide/using-template-engines.html), de celle de [mustache-express](https://www.npmjs.com/package/mustache-express) et de celle de [mustache](https://github.com/janl/mustache.js/), affichez la liste des sondages.

> ### Q1 - Comment fait-on une boucle en mustache ?
