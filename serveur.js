// ont importe la constante app qui provient du fichier app.js
const app = require('./app')
const port = 3100



//on demande a express d'exposer tout son contenue engeristrer sur le port 8000 du serveur qui acceuil l'app 
app.listen(port, () => {
   
   // on lancera une chaine de caratere en terminal pour avoir un retour pour etre sur que tout fonctionne 
    console.log("l'application tourne sur le port" + port);
    
  })