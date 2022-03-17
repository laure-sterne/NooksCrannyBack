const bcrypt = require('bcrypt')
const connection = require('../connectionToBdd')

identifyUser =  (req, resp, result, myPassword) => {
  console.log("Tentative de connexion");
  console.log("je suis un résultat");
  var hash = Object.values(result[0])[1]
  bcrypt.compare(myPassword, hash.toString(), 
    function(err, res) {
      if (err) {
        throw err;
      }
      if (res) {
        console.log(req.session, "User trouvé");
        resp.send({ok: "ok",
        result: result[0]});
      } else {
        resp.send({ok: "notOk"})
      }
    })
}

//identification user 
exports.selectUserData = async(req,res) => {
  var myEmail = connection.escape(req.body.mail);
  var myPassword = connection.escape(req.body.mdp);
  connection.query({
      sql: `SELECT mail, mdp, pseudo, statut FROM utilisateur WHERE mail = ${myEmail}`,
      timeout: 10000}, 
      function (err, result) {
        if(err) { 
          throw err;
        }
        else if (result[0]) {
        // console.log("je suis le premier résultat", result);
        identifyUser(req, res, result, myPassword);
        }
        else {
          res.send({ok : "notOk"})
        }
    })
  }

// création d'un utilisateur 
exports.createUser = async(req,res) =>{
    // faire l'échappemment 
    var mail = connection.escape(req.body.mail)
    var pseudo = connection.escape(req.body.pseudo)
    var mdp = connection.escape(req.body.mdp)
    await bcrypt.hash(mdp, 10).then(hash => {mdp = hash})
  
    // check if user exist 
    connection.query({
      sql: `SELECT mail FROM utilisateur WHERE mail = ${mail} `,
      timeout: 10000}, function (err, result) {
        if(err){throw err};
        if(result[0]){res.send({okk:"email déjà inscrit"});
        console.log(result) 
        console.log("fini")
      } 
        else {
  
    connection.query({
    sql: `INSERT INTO utilisateur (id, mail, mdp, pseudo) VALUES (NULL, ${mail}, '${mdp}', ${pseudo})`, 
    timeout: 10000}, function (err, result) {
      if(err) throw err;
      console.log(result)
    })
    console.log("fini")
    res.send({okk:"utilisateur créé"});
    }
  }
  )
}

//  page d'accueil 
exports.welcome =(req,res) => {
      console.log('bonjour fonctionne')
    if(req.session.userid){
        res.send("Welcome User <a href=\'/logout'>click to logout</a>");
    }else
    res.sendFile('./index.html',{root:__dirname})
};

//page après connexion 
exports.connected =(req,res)=>{
    res.send(`Hey there, welcome ${req.session.userid} <a href=\'/logout'>click to logout</a>`);
}

// déconnexion
  exports.logOut = (req,res) => {
    req.session.destroy();
    res.redirect('/');
};