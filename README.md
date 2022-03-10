# L'API du site de vente de meuble Nook's Cranny!

Afin d'utiliser l'API que nous avons commencé, il est important de suivre ces différentes étapes. 

## L'installation

- cloner le projet sur votre machine dans le dossier qui vous convient.
- faire un petit "npm install".
- vous avez un fichier .env.example qui montre la structure du fichier .env que vous devez créer et qui contiendra vos variables d'environnement (le port de lancement du serveur et le port php de votre base de données). A priori vous pouvez mettre port 4000 pour le serveur et port 8889 pour la base de données mais ça dépend de votre installation.

## La base de données
- Normalement tout le monde a un phpmyAdmin installé sur son ordinateur suite au dernier projet, sinon il faut le retélécharger : https://www.phpmyadmin.net/
- l'ouvrir à une adresse qui doit ressembler à ça : http://localhost:8888/phpMyAdmin5/
- créer une base de donnée nommée "boutiquenook"
- aller à l'onglet importer et sélectionner le fichier du projet nommé createdatabase.sql. Exécutez. Vous avez désormais la base de données boutiquenook opérationnelle sur votre ordinateur.

## Lancement du serveur
- De retour dans sur le projet, vous pouvez lancer le projet en lançant l    commande "node index.js".

## Test des différentes routes via postman
Il n'a pas été possible de créer une team sans payer dans postman, nous partageons donc l'espace de Victoire qui changera son mot de passe après la fin du projet. Ici : https://bit.ly/369zHDq
Je mets pas les infos de connection sur le github, on vous les donnera de vive voix.

## Structure du projet
Nous avons essayé au maximum d'organiser le projet en faisant une découpe des différentes fonctions.
Le fichier index.js est le point d'entrée, il initialise le serveur et la connection aux sessions.
On passe ensuite dans le routeur.js qui centralise toutes les routes et renvoie vers les différents controlleurs qui contiennent la logique des actions effectuée par chaque endpoint.

