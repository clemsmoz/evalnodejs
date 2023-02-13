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



// declaration des constante des routes de l'application
const routeAperitif = require('./src/routes/route_aperitif');
const routeDessert = require('./src/routes/route_dessert');
const routeDigestif = require('./src/routes/route_digestif');
const routeEntree = require('./src/routes/route_entree');
const routePoisson = require('./src/routes/route_poisson');
const routeViande = require('./src/routes/route_viande');


// Test de la route
app.get('/', (request,response) =>{
    response.send("ça fonctionne!");

})



//stockage des routes dans l'application
app.use(routeAperitif);
app.use(routeDessert);
app.use(routeDigestif);
app.use(routeEntree);
app.use(routePoisson);
app.use(routeViande);






// chemin vers le  fichier data.json
const cheminData = './src/model/data.json';    





// ont export la constante app pour la rendre utilisable dans d'autres partis du code
module.exports = app;