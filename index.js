//on appelle le fichier .env qui contient les variables d'environnement et doit rester secret. Il est à créer en prenant le .env.example pour modèle
require('dotenv').config();
const express = require('express');
const cookieParser = require("cookie-parser");
const sessions = require('express-session');

//username and password
const myusername = 'user1'
const mypassword = 'mypassword'

//création d'une instance d'express
const app = express();

//connection à la BDD`
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  port: 8889,
  database : 'boutiquenook'
});

connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

//connexion de test
connection.query(
  {sql: 'SELECT * FROM `meubles`',
  timeout: 40000}, function (err, result) {
  if(err) throw err;
  console.log(result)
})

//connection.end();

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

//première route basique de test de mise en place
app.get('/', (req,res) => {
  if(req.session.userid){
      res.send("Welcome User <a href=\'/logout'>click to logout</a>");
  }else
  res.sendFile('./index.html',{root:__dirname})
});

app.get('/user', (req, res) => {
  res.send(`Hey there, welcome ${req.session.userid} <a href=\'/logout'>click to logout</a>`);
})

app.post('/user',(req,res) => {
  if(req.body.username == myusername && req.body.password == mypassword){
      req.session.userid=req.body.username;
      console.log(req.session)
      res.send(`Hey there, welcome ${req.session.userid} <a href=\'/logout'>click to logout</a>`);
  }
  else{
      res.send('Invalid username or password');
  }
})

app.get('/logout',(req,res) => {
  req.session.destroy();
  res.redirect('/');
});


// API endpoints //

// créer un user 
app.post('/createuser',(req,res) => {

  // faire l'échappemment 
  // dire au front de demander un mail valide 
  // check if user exist 
  var mail = req.body.mail
  var mdp = req.body.mdp
  var pseudo = req.body.pseudo

  connection.query({
  sql: `INSERT INTO utilisateur (id, mail, mdp, pseudo) VALUES (NULL, '${mail}', '${mdp}', '${pseudo}')`, 
  timeout: 40000}, function (err, result) {
    if(err) throw err;
    console.log(result)
  })
  res.send("utilisateur créé")
})


// créer un meuble 
//app.post('/createmeuble',(req,res) => {

//})


// vérification dans la console que le serveur tourne et sur quel port.
app.listen(process.env.PORT || 4000, () => {
  console.log('Server running on :', process.env.PORT);
});