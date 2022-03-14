const fs = require("fs");
const connection = require("../connectionToBdd");

exports.showMeuble = (req, res) => {
  connection.query(
    {
      sql: "SELECT * FROM meubles",
      timeout: 10000,
    },
    function (err, result) {
      if (err) throw err;
      console.log(result);
      res.send(result);
    }
  );
};

exports.createMeuble = (req, res) => {
  // on récupère les éléments de la requête qui sont des strings avec un escape
  var name = connection.escape(req.body.nom);
  var description = connection.escape(req.body.description) || null;
  var type = connection.escape(req.body.type);
  var couleur = connection.escape(req.body.couleur);
  var matiere = connection.escape(req.body.matiere);
  var photo1 = connection.escape(req.body.photo1);
  var photo2 = connection.escape(req.body.photo2) || null;
  var photo3 = connection.escape(req.body.photo3) || null;
  var photo4 = connection.escape(req.body.photo4) || null;

  // on récupère les éléments de la requête qui sont des nombres avec un parseInt
  // "ou null" si le champs n'est pas obligatoire
  var largeur = parseInt(req.body.largeur) || null;
  var longueur = parseInt(req.body.longueur) || null;
  var hauteur = parseInt(req.body.hauteur) || null;
  var prix = parseInt(req.body.prix);

  // on récup l'id du vendeur dans les paramètres de la requête
  var vendeur_id = req.params.idVendeur;

  connection.query(
    {
      sql: `INSERT INTO meubles (id, description, nom, photo1, photo2, photo3, photo4, description, type, couleur, matière, largeur, longueur, hauteur, prix, vendeur_id) 
            VALUES (NULL, ${description}, ${name}, ${photo1}, ${photo2}, ${photo3}, ${photo4}, ${description}, ${type}, ${couleur}, ${matiere}, ${largeur}, ${longueur}, ${hauteur}, ${prix}, ${vendeur_id})`,
      timeout: 10000,
    },
    function (err, result) {
      if (err) throw err;
      console.log(result);
    }
  );
  res.send("meuble créé : ");
};


/*exports.modifyFurniture = (req, res) => {
  connection.query(
    {
      sql: `UPDATE meubles,
      SET couleur = 'gris',
      WHERE ${meubles_id} = 1`,
      timeout: 10000,
    },
    function (err, result) {
      if (err) throw err;
      console.log(result);
    }
  );
  res.send("meuble modifié : ");
};*/

exports.modifyFurniture = (req, res) => {
  console.log("bonjour");
  var meubles_id = req.params.meubles_id;
  connection.query(
    "UPDATE `meubles` SET `couleur`='gris' WHERE `meubles_id`= 1",
    [req.body.nom, req.body.meubles_id],
    function (error, results) {
      if (error) throw error;
      console.log(results);
      //    res.end(JSON.stringify(results));
    }
  );
  res.send("meuble modifié : ");
};