const fs = require('fs');
const bcrypt = require('bcrypt')
const connection = require('../connectionToBdd')

 //username and password test 
 const myusername = 'user1'
 const mypassword = 'mypassword'


//identification user 
exports.identifyUser =(req,res) =>{


    if(req.body.username == myusername && req.body.password == mypassword){
        req.session.userid=req.body.username;
        console.log(req.session)
        res.send(`Hey there, welcome ${req.session.userid} <a href=\'/logout'>click to logout</a>`);
    }
    else{
        res.send('Invalid username or password');
    }
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
      timeout: 40000}, function (err, result) {
        if(err){throw err};
        if(result[0]){res.send("email déjà inscrit")
        console.log(result) } 
        else {
  
    connection.query({
    sql: `INSERT INTO utilisateur (id, mail, mdp, pseudo) VALUES (NULL, ${mail}, '${mdp}', ${pseudo})`, 
    timeout: 40000}, function (err, result) {
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
