const express = require('express');
const router = express.Router();
const entreeController = require("../controller/controller_entree");

//définition  de le route permettant d'accéder au contenu du tableau entree,dans le fichier data.json
//GET : "/entree"
//EX: http://localhost:3100/entree
router.get('/entree', entreeController.getAllData)

//définition de la route permettant d'accéder aux données du tableau entree  avec son id
//GET: "/entree/:id"
//Ex: http://localhost:3100/entree/2
router.get("/entree/:id", entreeController.getDataById)

//définition de la route permettant d'afficher les données du tableau entrée avec son nom
//GET : "/entree/search/:name"
//EX : "http://localhost:3100/entree/search/moules gratinées en persillade"
router.get("/entree/search/:name", entreeController.getDataByName)

//d&finition de la route permettant d'ajouter une donnée au tableau entree
//POST : "/entree"
//EX : "http://localhost:3100/entree"
router.post("/entree", entreeController.createData)

//définition de la route permettant de mettre à jour les données du tableau entree  avec son id
// PUT: "/entree/:id"
//Ex: "http://localhost:3100/entree"
router.put("/entree/:id", entreeController.updateData)

//d&finition de la route permettant de supprimer une donnée du tableau entree avec son id
//DELETE: "/entree/:id"
//Ex: http://localhost:3100/entree/1
router.delete("/entree/:id", entreeController.deleteData)

module.exports = router;