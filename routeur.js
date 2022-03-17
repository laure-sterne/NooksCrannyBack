const express = require('express');
const router =express.Router();
const controlMeuble = require('./controllers/meubleController.js')
const controlUser = require('./controllers/utilisateurController.js')
var cors = require('cors')
router.use(cors());

//Route post user
router.post('/user',controlUser.selectUserData)
router.post('/createuser', controlUser.createUser)

//Route get user
router.get('/',controlUser.welcome)
router.get('/user',controlUser.connected)
router.get('/logout',controlUser.logOut)

//route post furniture
router.post('/meubles/:idVendeur(\\d+)', controlMeuble.createMeuble)

//route get furniture
router.get('/meubles', controlMeuble.showMeuble)
router.get('/meubles/type', controlMeuble.getByType)
router.get('/meubles/any',controlMeuble.getByAny)
router.get('/meubles/:meuble_id', controlMeuble.showOneMeuble)


//route patch pour modifier les meubles
router.patch('/meubles/:idMeuble(\\d+)', controlMeuble.modifyFurniture)
router.patch('/meubles/status/:idMeuble(\\d+)', controlMeuble.readStatus)

module.exports = router


