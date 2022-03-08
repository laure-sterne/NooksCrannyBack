//on appelle le fichier .env qui contient les variables d'environnement et doit rester secret. Il est à créer en prenant le .env.example pour modèle
require('dotenv').config();
const express = require('express');
//création d'une instance d'express
const app = express();

app.use(express.json());

//première route basique de test de mise en place
app.get('/', function (req, res) {
    res.send('hello world')
  })

// vérification dans la console que le serveur tourne et sur quel port.
app.listen(process.env.PORT || 4000, () => {
    console.log('Server running on :', process.env.PORT);
});