const bcrypt = require('bcrypt')
const connection = require('../connectionToBdd')

identifyUser = async (req, resu, result, myEmail, myPassword) => {
  console.log("Tentative de connexion");
  console.log("je suis un résultat", (Object.values(result[0])[1]));
  var hash = Object.values(result[0])[1]
  var verif = false 
  await bcrypt.compare(myPassword, hash.toString(), 
    function(err, res) {
      if (err) {
        console.log(err)
      }
      if (res) {
        console.log("ok")
        console.log(req.session, "User trouvé");
        verif = true;
        resu.send({ok: "ok",
        result: result[0]});
      } else {
        console.log("non")
        return false
      }
    })
  console.log(verif)
  return verif
}

//identification user 
exports.selectUserData = async(req,res) => {
  var myEmail = connection.escape(req.body.mail);
  var myPassword = connection.escape(req.body.mdp);
  console.log(myPassword);
  connection.query({
      sql: `SELECT mail, mdp, pseudo, statut FROM utilisateur WHERE mail = ${myEmail}`,
      timeout: 10000}, 
      function (err, result) {
        if(err) throw err;
        console.log("je suis le premier résultat", result);
        identifyUser(req, res, result, myEmail, myPassword);
        /* if (identifyUser(req, res, result,myEmail,myPassword) == true) {
          req.session.userid = req.body.mail;
          res.send({ok: "ok",
          result: result[0]});
        }
        else {
          res.send({ok: "notok"});
        }
      }) */
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