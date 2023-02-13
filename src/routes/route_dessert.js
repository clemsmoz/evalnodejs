const express = require('express');
const router = express.Router();
const dessertController = require("../controller/dessertController");

//définition  de le route permettant d'accéder au contenu du tableau dessert, dans le fichier data.json
//GET : "/dessert"
//EX: http://localhost:3100/dessert
router.get('/dessert', dessertController.getAllData)

//définition de la route permettant d'accéder aux données du tableau dessert  avec son id
//GET: "/dessert/:id"
//Ex: http://localhost:3100/dessert/2
router.get("/dessert/:id", dessertController.getDataById)

//définition de la route permettant d'afficher les données du tableau dessert avec son nom
//GET : "/dessert/search/:name"
//EX : "http://localhost:3100/dessert/search/colonel"
router.get("/dessert/search/:name", dessertController.getDataByName)

//d&finition de la route permettant d'ajouter une donnée au tableau dessert
//POST : "/dessert"
//EX : "http://localhost:3100/dessert"
router.post("/dessert", dessertController.createData)

//définition de la route permettant de mettre à jour les données du tableau dessert avec son id
// PUT: "/dessert/:id"
//Ex: "http://localhost:3100/dessert"
router.put("/dessert/:id", dessertController.updateData)

//d&finition de la route permettant de supprimer une donnée du tableau dessert avec son id
//DELETE: "/dessert/:id"
//Ex: http://localhost:3100/dessert/1
router.delete("/dessert/:id", dessertController.deleteData)

module.exports = router;