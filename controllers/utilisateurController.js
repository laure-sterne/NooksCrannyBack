const bcrypt = require('bcrypt')
const connection = require('../connectionToBdd')

//username and password test 
//const myEmail = 'user1@u.fr'
//const myPassword = 'mypassword'

identifyUser = (req,result,res,myEmail,myPassword) => {
  console.log("Tentative de connexion");
  console.log("je suis un résultat", result);
  if(connection.escape(Object.values(result[0])[0])== myEmail && (connection.escape(Object.values(result[0])[1]) == myPassword)){
    console.log(req.session, "User trouvé");
    return true;
  }
}

//identification user 
exports.selectUserData = (req,res) => {
  var myEmail = connection.escape(req.body.mail);
  var myPassword = connection.escape(req.body.mdp);
  console.log(myPassword);
  connection.query({
      sql: `SELECT mail, mdp FROM utilisateur WHERE mail = ${myEmail}`,
      timeout: 10000}, 
      function (err, result) {
        if(err) throw err;
        console.log("je suis le premier résultat",result);
        identifyUser(req,result,res,myEmail,myPassword);
        if (identifyUser(req,result,res,myEmail,myPassword) == true) {
          req.session.userid = req.body.mail;
          res.send({ok: "ok"});
        }
        else {
          res.send({ok: "notok"});
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
        if(result[0]){res.send("email déjà inscrit")
        console.log(result) } 
        else {
  
    connection.query({
    sql: `INSERT INTO utilisateur (id, mail, mdp, pseudo) VALUES (NULL, ${mail}, '${mdp}', ${pseudo})`, 
    timeout: 10000}, function (err, result) {
      if(err) throw err;
      console.log(result)
    })
    res.send("utilisateur créé")
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