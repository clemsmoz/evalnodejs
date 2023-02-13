const express = require('express');
const router = express.Router();
const poissonController = require("../controller/poissonController");

//définition  de le route permettant d'accéder au contenu du tableau poisson, dans le fichier data.json
//GET : "/entree"
//EX: http://localhost:3100/poisson
router.get('/poisson', entreeController.getAllData)

//définition de la route permettant d'accéder aux données du tableau poisson avec son id
//GET: "/poisson/:id"
//Ex: http://localhost:3100/poisson/2
router.get("/poisson/:id", poissonController.getDataById)

//définition de la route permettant d'afficher les données du tableau poisson avec son nom
//GET : "/poisson/search/:name"
//EX : "http://localhost:3100/poisson/search/Brandade de morue"
router.get("/poisson/search/:name", poissonController.getDataByName)

//d&finition de la route permettant d'ajouter une donnée au tableau poisson
//POST : "/poisson"
//EX : "http://localhost:3100/poisson"
router.post("/poisson", entreeController.createData)

//définition de la route permettant de mettre à jour les données du tableau poisson avec son id
// PUT: "/poisson/:id"
//Ex: "http://localhost:3100/poisson"
router.put("/poisson/:id", poissonController.updateData)

//d&finition de la route permettant de supprimer une donnée du tableau poisson avec son id
//DELETE: "/poisson/:id"
//Ex: http://localhost:3100/poisson/1
router.delete("/poisson/:id", poissonController.deleteData)

module.exports = router;