// Déclareration de la  constante qui contiendra l'export du module express
const express = require("express");
// Déclareration de la  constante qui contiendra la fonction express qui crée l'appli express                            
const app = express();
// Déclareration de la constante pour l'export du module fs
const fs = require('fs'); 
// Déclareration de la  constante qui continedra l'export du module body parser qui peut manipuler des données http POST 
const bodyParser = require("body-parser");
//  l'appli express devra utiliser bodyParser pour lire le bosy en JSON
app.use(bodyParser.json());

// Test de la route
app.get('/', (request,response) =>{
    response.send("ça fonctionne!");

})

// declaration des constante des routes de l'application
const route_aperitif = require('routes/route_aperitif');
const route_dessert = require('routes/route_dessert');
const route_digestif = require('routes/route_digestif');
const route_entree = require('routes/route_entree');
const route_poisson = require('routes/route_poisson');
const route_viande = require('routes/route_viande');

//stockage des routes dans l'application
app.use(route_aperitif);
app.use(route_dessert);
app.use(route_digestif);
app.use(route_entree);
app.use(route_poisson);
app.use(route_viande);






// chemin vers le  fichier data.json
const chemin_data = 'model/data.json';    


// ont export la constante app pour la rendre utilisable dans d'autres partis du code
module.exports = app;