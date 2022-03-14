const express = require('express');
const router =express.Router();
const controlMeuble = require('./controllers/meubleController.js')
const controlUser = require('./controllers/utilisateurController.js')

//Route post user
router.post('/user',controlUser.identifyUser)
router.post('/createuser',controlUser.createUser)

//Route get user
router.get('/',controlUser.welcome)
router.get('/user',controlUser.connected)
router.get('/logout',controlUser.logOut)

//route post furniture
router.post('/meuble/:idVendeur(\\d+)', controlMeuble.createMeuble)

//route get furniture
router.get('/meubles', controlMeuble.showMeuble)

//route put modify furniture
router.put('/meubles/:meubles_id', controlMeuble.modifyFurniture)

module.exports = router