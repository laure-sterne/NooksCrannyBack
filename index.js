//on appelle le fichier .env qui contient les variables d'environnement et doit rester secret. Il est à créer en prenant le .env.example pour modèle
require('dotenv').config();
const express = require('express');
const cookieParser = require("cookie-parser");
const sessions = require('express-session');
const router = require('./routeur')
const connection = require('./connectionToBdd')
var mysql      = require('mysql');


//création d'une instance d'express
const app = express();

connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(__dirname));


const oneDay = 1000 * 60 * 60 * 24;
app.use(sessions({
    secret: "secret",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false 
}));

app.use(router);

// vérification dans la console que le serveur tourne et sur quel port.
app.listen(process.env.PORT || 4000, () => {
  console.log('Server running on :', process.env.PORT);
});