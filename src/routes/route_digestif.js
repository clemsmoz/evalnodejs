const express = require('express');
const router = express.Router();
const digestifController = require("../controller/digestifController");

//définition  de le route permettant d'accéder au contenu du tableau digestif, dans le fichier data.json
//GET : "/digestif"
//EX: http://localhost:3100/digestif
router.get('/digestif', digestifController.getAllData)

//définition de la route permettant d'accéder aux données du tableau digestif avec son id
//GET: "/digestif/:id"
//Ex: http://localhost:3100/digestif/2
router.get("/digestif/:id", digestifController.getDataById)

//définition de la route permettant d'afficher les données du tableau digestif avec son nom
//GET : "/digestif/search/:name"
//EX : "http://localhost:3100/digestif/search/cognac"
router.get("/digestif/search/:name", digestifController.getDataByName)

//d&finition de la route permettant d'ajouter une donnée au tableau digestif
//POST : "/digestif"
//EX : "http://localhost:3100/digestif"
router.post("/digestif", digestifController.createData)

//définition de la route permettant de mettre à jour les données du tableau digestif avec son id
// PUT: "/dessert/:id"
//Ex: "http://localhost:3100/digestif"
router.put("/digestif/:id", digestifController.updateData)

//d&finition de la route permettant de supprimer une donnée du tableau digestif avec son id
//DELETE: "/digestif/:id"
//Ex: http://localhost:3100/digestif/1
router.delete("/digestif/:id", digestifController.deleteData)

module.exports = router;