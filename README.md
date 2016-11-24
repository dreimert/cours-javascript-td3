# Cours de Javascript : TD 3 - étape 1

## Cahier des charges

Un client vous a contacté pour pour réaliser une application de sondage en ligne. Après discussion, il vous a transmit le cahier des charges suivants :

* L'application doit être utilisable depuis un navigateur web.
* Le serveur doit être écrit en node.js.
* Il ne doit pas y avoir de Javascript coté client.
* Il va vous transmettre le design des pages HTML à utiliser.

## Création du projet

Il faut commencer par initialiser le projet. Nous allons utiliser pour ce faire l'outil de gestion des paquets de Node.js : npm.

En utilisant la documentation de [`npm init`](https://docs.npmjs.com/cli/init), du [`package.json`](https://docs.npmjs.com/files/package.json) et à l'aide de votre terminal préféré, créez un fichier *package.json* qui aura pour valeur de la propriété *name* "sondage".

> ### Q1 - À quoi sert `npm init` ?

## Installation des dépendances

Node.js propose dans ses bibliothèques standards un serveur http. Vous pouvez trouver la documentation à cette url : https://nodejs.org/api/http.html.

Cette API est un peu brute et de nombreuses bibliothèques tierces proposent des implémentations ou des sur-couches plus simple d'usage.

Nous allons utiliser Express : http://expressjs.com/.

En utilisant la [documentation de mise en route](http://expressjs.com/fr/starter/installing.html), installez Express dans le projet. Votre fichier *package.json* doit contenir une référence à Express.

> ### Q2 - À quoi sert l'option `--save` de `npm install` ?

## Écrire un serveur avec Node.js

Vous allez maintenant pouvoir écrire du code. Pour ce faire, vous pouvez utiliser [Atom](https://atom.io/). C'est un IDE écrit en Javascript, HTML et CSS.

En utilisant l'[exemple de la documentation de Express](http://expressjs.com/fr/starter/hello-world.html), écrivez un serveur qui répond sur le port 8000. Il faut que quand on ouvre http://localhost:8000 avec un navigateur web, l'expression "Bonjour !" s'affiche à l'écran. Le nom du fichier contenant le code du serveur doit être *index.js*.

> ### Q3 - Que fait `res.send` ?
> ### Q4 - Que fait `app.listen` ?

## Lancer le serveur

Pour lancer le serveur, dans un terminal, exécutez votre code avec node : `node index.js`.

Vous pouvez maintenant aller sur http://localhost:8000 avec votre navigateur web.

## npm start

Une bonne pratique quand on développe en node.js est de pouvoir lancer son code avec npm et la commande `npm start`.

> ### Q5 - Que fait cette commande actuellement ?

En utlisant [cette documentation](https://docs.npmjs.com/cli/start) et les documentations connexes, fait en sorte que `npm start` lance votre serveur.

## Outils de développement.

Modifiez votre code pour que le serveur répondre sur le port 8001 au lieu du 8000.

> ### Q6 - Que devez-vous faire pour que les modifications soient prises en compte ?

Cette tâche peut rapidement être pénible. Nous allons l'automatiser.

En utilisant la documentation de [nodemon](https://github.com/remy/nodemon) et la documentation de [npm](https://docs.npmjs.com/), faite en sorte que la commande `npm run dev` lancer et relance automatiquement votre code quand il y a des modifications.

> ### Q7 - Que fait l'option `--save-dev` de `npm install` ?

Modifier votre code pour remettre sur le port 8000. Vérifier que les modifications sont bien prises en compte automatiquement.

## La suite...

Vous avez maintenant un environment de travail minimal et un serveur qui répond sur le port 8000.

Nous allons pouvoir implémenter le cahier des charges du client en passant à l'étape 2 : `git checkout etape-2`.
