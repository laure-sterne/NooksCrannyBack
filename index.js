//on appelle le fichier .env qui contient les variables d'environnement et doit rester secret. Il est à créer en prenant le .env.example pour modèle
require('dotenv').config();
const express = require('express');
const cookieParser = require("cookie-parser");
const sessions = require('express-session');
const bcrypt = require('bcrypt')
const router = require('./routeur')
const connection = require('./connectionToBdd')
var mysql      = require('mysql');


//création d'une instance d'express
const app = express();

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

//première route basique de test de mise en place
// app.get('/', (req,res) => {
//   if(req.session.userid){
//       res.send("Welcome User <a href=\'/logout'>click to logout</a>");
//   }else
//   res.sendFile('./index.html',{root:__dirname})
// });

// app.get('/user', (req, res) => {
//   res.send(`Hey there, welcome ${req.session.userid} <a href=\'/logout'>click to logout</a>`);
// })

// app.post('/user',(req,res) => {
//   if(req.body.username == myusername && req.body.password == mypassword){
//       req.session.userid=req.body.username;
//       console.log(req.session)
//       res.send(`Hey there, welcome ${req.session.userid} <a href=\'/logout'>click to logout</a>`);
//   }
//   else{
//       res.send('Invalid username or password');
//   }
// })

// app.get('/logout',(req,res) => {
//   req.session.destroy();
//   res.redirect('/');
// });


// API endpoints //

// créer un user 
// app.post('/createuser', async (req,res) => {

 
//   // faire l'échappemment 
//   var mail = connection.escape(req.body.mail)
//   var pseudo = connection.escape(req.body.pseudo)
//   var mdp = connection.escape(req.body.mdp)
//   await bcrypt.hash(mdp, 10).then(hash => {mdp = hash})

//   // check if user exist 
//   connection.query({
//     sql: `SELECT mail FROM utilisateur WHERE mail = ${mail} `,
//     timeout: 40000}, function (err, result) {
//       if(err){throw err};
//       if(result[0]){res.send("email déjà inscrit")
//       console.log(result) } 
//       else {

//   connection.query({
//   sql: `INSERT INTO utilisateur (id, mail, mdp, pseudo) VALUES (NULL, ${mail}, '${mdp}', ${pseudo})`, 
//   timeout: 40000}, function (err, result) {
//     if(err) throw err;
//     console.log(result)
//   })
//   res.send("utilisateur créé")
//   }
// }
// )
// })

  // crypter mdp 
  


// créer un meuble 
//app.post('/createmeuble',(req,res) => {

//})


// vérification dans la console que le serveur tourne et sur quel port.
app.listen(process.env.PORT || 4000, () => {
  console.log('Server running on :', process.env.PORT);
});