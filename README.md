# Cours de Javascript : TD 3 - étape 2

## Cahier des charges

Votre client vient de vous recontacter pour préciser le cahier des charges :

* [x] L'application doit être utilisable depuis un navigateur web.
* [x] Le serveur doit être écrit en node.js.
* [ ] Il ne doit pas y avoir de Javascript coté client.
* [ ] Quand l'utilisateur arrive sur l'application, un formulaire pour créer un sondage doit lui être proposé.
* [ ] Un sondage est constitué d'une question et de deux choix possibles.
* [ ] Quand l'utilisateur se rend sur `/liste`, il doit trouver la liste de tous les sondages.
* [ ] Dans la liste des sondages, il doit être rediriger vers la page du sondage.
* [ ] Sur la page du sondage, il doit pouvoir répondre au sondage.

Il vous a transmis des exemples de pages HTML à utiliser. Elles sont dans le dossier *views*.

## Retourner le formulaire de création d'un sondage.

À l'aide de la [document de Express](http://expressjs.com/fr/starter/static-files.html), fait en sorte que l'ouverture de http://localhost:8000/nouveau.html affiche le formulaire de création d'un sondage.

> ### Q1 - Que se passe-t'il quand vous validez le formulaire ? Pourquoi ?

## Traiter le formulaire

À l'aide de la [documentation sur le routage](http://expressjs.com/fr/guide/routing.html), faite en sorte qu'un message "Formulaire reçu." apparaisse quand celui-ci est soumis.

Il faut maintenant traiter les données reçues pour les stocker. En HTML, les données envoyées par un formulaire sont dans son *body*. Prenez connaissance de la [documentation de *req.body*](http://expressjs.com/fr/4x/api.html#req.body) et de [body-parser](https://github.com/expressjs/body-parser). Modifier votre code pour que lors de la réception d'un formulaire par le serveur, il affiche sont contenu dans la console.

> ### Q2 - Qu'est qu'un middleware ?

Notre but est d'afficher une liste des formulaires, il faut donc stocker ce formulaire. Pour le moment, on va le faire en mémoire. Déclarer au début de votre code un tableau vide appelé *sondages*. À chaque fois que le serveur reçoit un sondage, il doit le stocker dans ce tableau.

> ### Q3 - Que ce passe-t'il quand vous modifier du code et que votre serveur redémarre ? Quelle serait la bonne solution ?

## Afficher la liste des formulaires

L'utilisateur peut créer des sondages et ils sont sauvegardés par votre serveur. Il faut maintenant afficher la liste des sondages.

Pour ce faire, il faut lire votre base de données de sondage et les envoyer au navigateur. Vous pouvez faire cela en pur Javascript et en utilisant la fonction *res.send*.

Mais quand la page devient complexe ou tout simplement pour séparer proprement le rendu du fonctionnement du serveur, il est pratique d'utiliser un moteur de modèle.

À l'aide de la [documentation des moteurs de modèle d'Express](http://expressjs.com/fr/guide/using-template-engines.html), de celle de [mustache-express](https://www.npmjs.com/package/mustache-express) et de celle de [mustache](https://github.com/janl/mustache.js/), affichez la liste des sondages.

> ### Q4 - Comment fait-on une boucle en mustache ?

## Répondre aux sondages

En appliquant les connaissances acquises précédemment, affichez les sondages.

Pour vous aidez, lisez l'[exemple de base de l'utilisation de l'object Request](http://expressjs.com/fr/4x/api.html#req).

N'oubliez pas de traiter le cas où le formulaire n'est pas traité.

## Enregistrer les réponses aux sondage

En appliquant les connaissances acquises précédemment, enregistrez les réponses aux sondages.

## Cahier des charges rempli

Vous avez maintenant rempli le cahier des charges du client. Vous pouvez passer à l'étape suivante : `git checkout etape-3`
