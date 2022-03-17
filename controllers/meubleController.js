const fs = require("fs");
const bcrypt = require('bcrypt');
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

exports.showOneMeuble = (req, res) => {

  var meuble_id = req.params.meuble_id;
  console.log('hola', meuble_id);

  connection.query(
    {
      sql: `SELECT * FROM meubles
      WHERE id = ${meuble_id}`,
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
  res.send("meuble créé");
};

exports.modifyFurniture = (req, res)=>{

  var parametre = Object.keys(req.body);
  var valeur = Object.values(req.body);
  var meuble_id = req.params.idMeuble;
  var query = ``

  let i = 0
  while(i < parametre.length){

  if (i == parametre.length-1){
    query += `${Object.values(parametre)[i]} = '${Object.values(valeur)[i]}'`;
  } else {
    query += `${Object.values(parametre)[i]} = '${Object.values(valeur)[i]}', `;
  }

  console.log("je suis le potentiel paramètre", parametre)
  console.log("je suis une valeur youhou", valeur)
  console.log("je suis la gentille query", query);

  i++;
  }

  connection.query(
    {
    sql: `UPDATE meubles
    SET ${query} 
    WHERE id = ${meuble_id}`,
    timeout: 10000,
  },
  function (err, result) {
    if (err) throw err;
    console.log(result);
  })

  res.send("meuble modifié");
};

changeStatus = (req, result, meuble_id)=> {
  var query = ``
  console.log(Object.values(result[0]))

  if (Object.values(result[0])== 'disponible'){
    console.log(result, 'disponible => indisponible')
    query = `UPDATE meubles SET statut = 'indisponible' WHERE id = ${meuble_id}`
  } else if(Object.values(result[0]) == 'indisponible'){
    console.log(result, 'indisponible => disponible')
    query = `UPDATE meubles SET statut = 'disponible' WHERE id = ${meuble_id}`
  } else {
    console.log('coucou', result)
  }
  connection.query(
    {
      sql: `${query}`
    },
  function (err, result) {
    if (err) throw err;
    console.log(result);}
  )
}

exports.readStatus = (req, res)=>{
  //var statut = connection.escape(req.body.statut)
  var meuble_id = req.params.idMeuble;

  connection.query(
  {
    sql: `SELECT statut FROM meubles WHERE id = ${meuble_id}` 
  },
    function (err, result) {
    if (err) throw err;
    console.log('je me trouve dans readStatus', result);
    res.send(result)
    changeStatus(req, result, meuble_id)
  }
  )
}

exports.getByType = (req, res)=>{
  var valueType = connection.escape(req.body.type)
  console.log("je suis la valueType", typeof(valueType))
  connection.query(
    {
      sql: `SELECT * FROM meubles WHERE type = ${valueType}` 
    },
    function (err, result) {
      if (err) throw err;
      console.log(result);
      res.send(result)
    }
  )
}

exports.getByAny= (req, res)=>{
  var parametre = Object.keys(req.body)[0];
  console.log ("je suis le parametre", parametre)
  var valueType = Object.values (req.body)[0]
  console.log("je suis la valueType", valueType)
  connection.query(
    {
      sql: `SELECT * FROM meubles WHERE ${parametre} = "${valueType}"` 
    },
    function (err, result) {
      if (err) throw err;
      console.log(result);
      res.send(result)
    }
  )
}