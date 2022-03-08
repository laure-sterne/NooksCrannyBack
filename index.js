//on appelle le fichier .env qui contient les variables d'environnement et doit rester secret. Il est à créer en prenant le .env.example pour modèle
require('dotenv').config();
const express = require('express');
const cookieParser = require("cookie-parser");

//username and password
const myusername = 'user1'
const mypassword = 'mypassword'

// a variable to save a session
var session;


// création de la variable pour gérer les sessions 
const sessions = require('express-session');

//création d'une instance d'express
const app = express();



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
app.get('/',(req,res) => {
  session=req.session;
  if(session.userid){
      res.send("Welcome User <a href=\'/logout'>click to logout</a>");
  }else
  res.sendFile('./index.html',{root:__dirname})
});

app.post('/user',(req,res) => {
  if(req.body.username == myusername && req.body.password == mypassword){
      session=req.session;
      session.userid=req.body.username;
      console.log(req.session)
      res.send(`Hey there, welcome <a href=\'/logout'>click to logout</a>`);
  }
  else{
      res.send('Invalid username or password');
  }
})

app.get('/logout',(req,res) => {
  req.session.destroy();
  res.redirect('/');
});

// vérification dans la console que le serveur tourne et sur quel port.
app.listen(process.env.PORT || 4000, () => {
    console.log('Server running on :', process.env.PORT);
});

