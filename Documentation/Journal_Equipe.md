# Journal du projet

*Ce fichier est destiné à recevoir un récapitulatif de ce que vous avez fait pendant la journée avec votre équipe. Vous êtes libres d'organiser le bilan de vos journées comme bon vous semble (ex : fait aujourd'hui - plans pour demain - blocages)*

Lundi 07 Mars :

Configuration :
-postgreSQL, express, node.js 
(depuis notre repo, npm init, npm install express, npm install express-session, npm install pg, npm bcrypt), quand on "pullera", faire un npm install pour récupérer toutes les installations (et ne pas oublier la création du fichier .env en s'inspirant du modèle .env.exemple qui sera stocké automatiquement dans gitignore)
-créer une team sur postman pour pouvoir tester nos requêtes "API meubles"(pas possible d'être plus de trois :() 

Création base de donnée sur VSC commit "database table created" puis importation dans pgadmin:
table browser : query tool, select file dans dossier data "create_tables" de notre repo

Mardi 08 Mars : 

-passage sur phpmyAdmin pour gérer la base de donnée 

Monter le serveur :
documentation pour monter le serveur express : 
https://expressjs.com/fr/4x/api.html#app
commande pour lancer le serveur : node index.js 
+ fichier de configuration ".env" (avec nos variables d'environnement ex: port, data_url) important pour ne pas commit des infos types mot de passe, identifiant etc) 

Mettre en place les sessions : 
documentation : https://github.com/expressjs/session, 
SURTOUT CELUI-LA https://www.section.io/engineering-education/session-management-in-nodejs-using-expressjs-and-express-session/
--> On a mis en place une version test, à modifier en fonction des besoins du front 


Pour la suite; 

--à mettre dans router.js:
//route put pour modifier les meubles (pas encore effective, voir la fonction modifyFurniture)
 router.put('./meubles/:meubles_id',controlMeuble.modifyFurniture)

--à mettre dans meubleController:

const fs = require('fs');
const bcrypt = require('bcrypt')
const connection = require('../connectionToBdd')

//tentative de route pour pouvoir modifier les meubles (pas encore effective)
 exports.modifyFurniture =(req, res)=>{
     console.log("bonjour")
    connection.query('UPDATE `meubles` SET `nom`=? WHERE `vendeur_id`= ?', [req.body.nom, req.body.vendeur_id], function (error, results) {
        if (error) throw error;
        console.log(results)
     //    res.end(JSON.stringify(results));
      });
  };
  



