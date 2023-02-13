const express = require('express');
const router = express.Router();
const viandeController = require("../controller/controller_viande");

//définition  de le route permettant d'accéder au contenu du tableau viande, dans le fichier data.json
//GET : "/viande"
//EX: http://localhost:3100/viande
router.get('/viande', viandeController.getAllData)

//définition de la route permettant d'accéder aux données du tableau viande  avec son id
//GET: "/viande/:id"
//Ex: http://localhost:3100/viande/2
router.get("/viande/:id", viandeController.getDataById)

//définition de la route permettant d'afficher les données du tableau viande avec son nom
//GET : "/viande/search/:name"
//EX : "http://localhost:3100/viande/search/Filets de boeuf, sauce Roquefort"
router.get("/viande/search/:name", viandeController.getDataByName)

//d&finition de la route permettant d'ajouter une donnée au tableau viande
//POST : "/viande"
//EX : "http://localhost:3100/entree"
router.post("/viande", viandeController.createData)

//définition de la route permettant de mettre à jour les données du tableau viande  avec son id
// PUT: "/viande/:id"
//Ex: "http://localhost:3100/viande"
router.put("/viande/:id", viandeController.updateData)

//d&finition de la route permettant de supprimer une donnée du tableau viande avec son id
//DELETE: "/viande/:id"
//Ex: http://localhost:3100/viande/1
router.delete("/viande/:id", viandeController.deleteData)

module.exports = router;