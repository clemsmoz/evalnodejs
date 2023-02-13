const express = require('express');
const router = express.Router();
const aperitifController = require("../controller/controller_aperitif");


//définition  de le route permettant d'accéder au contenu du tableau aperitif contenue dans le fichier data.json
//GET : "/aperitif"
//EX: http://localhost:3100/aperitif
router.get('/aperitif', aperitifController.getAllData)

//définition de la route permettant d'accéder aux données du tableau aperitif  avec son id
//GET: "/aperitif/:id"
//Ex: http://localhost:3100/aperitif/2
router.get("/aperitif/:id", aperitifController.getDataById)

//définition de la route permettant d'afficher les données du tableau aperitif avec son nom
//GET : "/aperitif/search/:name"
//EX : "http://localhost:3100/aperitif/search/martini"
router.get("/aperitif/search/:name", aperitifController.getDataByName)

//d&finition de la route permettant d'ajouter une donnée au tableau aperitif
//POST : "/aperitif"
//EX : "http://localhost:3100/aperitif"
router.post("/aperitif", aperitifController.createData)

//définition de la route permettant de mettre à jour les données du tableau aperitif avec son id
// PUT: "/aperitif/:id"
//Ex: "http://localhost:3100/aperitif"
router.put("/aperitif/:id", aperitifController.updateData)

//d&finition de la route permettant de supprimer une donnée du tableau aperitif avec son id
//DELETE: "/aperitif/:id"
//Ex: http://localhost:3100/aperitif/1
router.delete("/aperitif/:id", aperitifController.deleteData)

module.exports = router;