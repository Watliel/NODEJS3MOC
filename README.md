# ESGI-NODE

Ce dépot contient un serveur web / API en Node.js.

Ce serveur répond "Hello World" quand on envoie une requête HTTP GET à la racine.

## Installation et exécution

```
$ git clone mon de mon git pour ce projet
$ cd node-esgi
$ npm install # pour installer les dépendances
$ npm start # pour exécuter le serveur
# presser ctrl-c pour quitter le serveur
```

## Comment tester le serveur

```
$ curl http://localhost:3000/ # doit retourner le texte “Hello World”
```
## installation de express-generator
$ taper npx express-generator --hogan --git