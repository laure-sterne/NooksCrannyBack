const fs = require("fs");
const connection = require("../connectionToBdd");

exports.createMeuble = (req, res) => {
  // on récupère les éléments de la requête qui sont des strings avec un escape 
  var name = connection.escape(req.body.nom);
  var description = connection.escape(req.body.description) || null ;
  var type = connection.escape(req.body.type);
  var couleur = connection.escape(req.body.couleur);
  var matiere = connection.escape(req.body.matiere);
  var photo1 = connection.escape(req.body.photo1);
  var photo2 = connection.escape(req.body.photo2) || null;
  var photo3 = connection.escape(req.body.photo3) || null;
  var photo4 = connection.escape(req.body.photo4) || null;

  // on récupère les éléments de la requête qui sont des nombres avec un parseInt 
  // "ou null" si le champs n'est pas obligatoire 
  var largeur = parseInt(req.body.largeur) || null ;
  var longueur = parseInt(req.body.longueur) || null;
  var hauteur = parseInt(req.body.hauteur) || null;
  var prix = parseInt(req.body.prix);

  // on récup l'id du vendeur dans les paramètres de la requête 
  var vendeur_id = parseInt(req.params.idVendeur)
  
  connection.query(
          {
            sql: `INSERT INTO meubles (id, nom, photo1, photo2, photo3, photo4, description, type, couleur, matière, largeur, longueur, hauteur, prix, vendeur_id) 
            VALUES (NULL, ${name}, ${photo1}, ${photo2}, ${photo3}, ${photo4}, ${description}, ${type}, ${couleur}, ${matiere}, ${largeur}, ${longueur}, ${hauteur}, ${prix}, ${vendeur_id})`,
            timeout: 40000,
          },
          function (err, result) {
            if (err) throw err;
            console.log(result);
          }
        );
        res.send("meuble créé : ");
      }
  
