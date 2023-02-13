const fs = require("fs");
const cheminData = './src/model/data.json';    


exports.createData = (request, response) => {
  // Utiliser la méthode readfile du module fs pour lire le data.json
  fs.readFile(cheminData, (err, data) => {
    // condition si l'erreur n'est pas null
    if (err) {
      // Renvoyer l'erreur status 500 et le message
      response.status(500).json({
        message: "Erreur lors de la lecture des données",
        error: err,
      });
    } else {
      //on récupère les données,et le transforme en objet json et ont les assignent dans une constante
      const existingData = JSON.parse(data);
      //si le tableau entree est vide
      if (existingData.entree.length === 0) {
        //on ajoute un objet avec un id et un name
        existingData.entree.push({
          id: 1,
          name: request.body.name,
        });
        //sinon
      } else {
        //on récupère le dernier objet du tableau  et on l'assigne dans une constante
        const dataById = existingData.entree.findLast((obj) => obj.id);
        //on ajoute dans le tableau un nouvel objet avec un id + 1 par rapport au dernier objet
        existingData.entree.push({
          id: dataById.id + 1,
          name: request.body.name,
        });
        //on réécrit la donnée dans le fichier data.json avec existing_data qui contient la nouvelle requète en plus
      }
      fs.writeFile(cheminData,JSON.stringify(existing_data),
        (writeErr) => {
          // condition si l'erreur n'est pas null
          if (writeErr) {
            // Renvoyer l'erreur 500 avec un message
            response.status(500).json({
              message: "Erreur lors de la lecture des données",
              error: err,
            });
          } else {
            //sinon on renvoit un réponse avec un status 200 et un message
            response.status(200).json({
              message: "Les nouvelles données ont bien été ajoutées",
            });
          }
        }
      );
    }
  });
};

exports.getAllData = (request, response) => {
  // Lecture du fichier data.json
  fs.readFile(cheminData, (err, data) => {
    // condition si l'erreur n'est pas null
    if (err) {
      // Renvoyer l'erreur 500 avec un message
      response.status(500).json({
        message: "Erreur lors de la lecture des données",
        error: err,
      });
    } else {
      //ont assignent les données dans une constante sous forme d'objet JSON
      const existingData = JSON.parse(data);
      //ont assignent  dans une constante le tableau entree
      const allData = existingData.entree;
      //ont envoit une réponse avec le status 200 et le tableau entree
      response.status(200).json(allData);
    }
  });
};

exports.getDataById = (request, response) => {
  // Lecture du fichier data.json
  fs.readFile(cheminData, (err, data) => {
    // condition si l'erreur n'est pas null
    if (err) {
      // Renvoyer l'erreur 500 avec un message
      response.status(500).json({
        message: "Erreur lors de la lecture des données",
        error: err,
      });
    } else {
      //ont récupère les données on les transformant en objet json manipulable
      const manipData = JSON.parse(data);
      //ont assignent dans une constante l'objet du tableau entree dont l'id est égal à l'id de la requète
      const manipDataById = manipData.entree.find(
        (obj) => obj.id === parseInt(request.params.id)
      );
      //si ont ne trouve pas l'objet
      if (!manipDataById) {
        //ont envoit une réponse avec un status 404 et un message d'erreur
        response.status(404).json({
          message: "erreur, pas de donnée avec cet id",
        });
      } else {
        //on envoit une réponse avec un status 200 et l'objet dont l'id est egal àl'id de la requète
        response.status(200).json(manipDataById);
      }
    }
  });
};

exports.getDataByName = (request, response) => {
  // Lecture du fichier data.json
  fs.readFile(cheminData, (err, data) => {
    // condition si l'erreur n'est pas null
    if (err) {
      // Renvoyer l'erreur 500 avec un message
      response.status(500).json({
        message: "Erreur lors de la lecture des données",
        error: err,
      });
    } else {
      //sinon ont récupère les données, les transforment en objet JSON et on les assignent dans une constante
      const dataName = JSON.parse(data);
      // ont assignent une constante l'objet du tableau possèdant un name égal au name de la requète
      const dataByName = dataName.entree.find(
        (obj) => obj.name.toLowerCase() === request.params.name.toLowerCase()
      );
      //si on ne trouve pas d'objet avec ce name
      if (!dataByName) {
        //on renvoie une réponse avec un status 404 et un message d'erreur
        response.status(404).json({
          message: "Aucune entree contenant ce nom dans les données",
          error: err,
        });
      } else {
        //sinon on renvoie une reponse avec un status 200 et la constante possédant l'objet
        response.status(200).json(dataByName);
      }
    }
  });
};

exports.updateData = (request, response) => {
  //on lit le fichier data.json
  fs.readFile(cheminData, (err, data) => {
    // condition si l'erreur n'est pas null
    if (err) {
      // Renvoyer l'erreur 500 avec un message
      response.status(500).json({
        message:
          "Une erreur est survenue lors de la lecture du fichier data.json",
        error: err,
      });
    } else {
      //on stock les données trouver dans une constante et les transforment en objet json
      const existingData = JSON.parse(data);
      //dans le tableau on sélectionne l'objet avec le même id que la requète et on le stock dans dataById
      const dataById = existingData.entree.find(
        (obj) => obj.id === parseInt(request.params.id)
      );
      if (!dataById) {
        response.status(404).json({
          message: "Pas objet avec cet id ",
          error: err,
        });
      } else {
        //on change le name de l'objet et on lui assigne le name de la requète du body
        dataById.name = request.body.name;
        //on écrit les données modifier dans data.json
        fs.writeFile(cheminData,JSON.stringify(existingData),
          (writeErr) => {
            // condition si l'erreur n'est pas null
            if (writeErr) {
              // Renvoyer l'erreur 500 avec un message
              response.status(500).json({
                message: "Une erreur d'écriture est survenue",
                error: err,
              });
            } else {
              //on envoit un réponse avec un status 200 et un message confirmant la misent à jour des données
              response.status(200).json({
                message: "Les données on bien été misent à jour",
              });
            }
          }
        );
      }
    }
  });
};

exports.deleteData = (request, response) => {
  //lecture de data.json
  fs.readFile(cheminData, (err, data) => {
    // condition si l'erreur n'est pas null
    if (err) {
      // Renvoyer l'erreur 500 avec un message
      response.status(500).json({
        message: "erreur est survenue lors de la lecture des données",
        error: err,
      });
    } else {
      //on stock les données dans une constante et on les transforme en objet
      const existingData = JSON.parse(data);
      //on stock l'objet dont l'id = l'id de la requète
      const dataById = existingData.entree.find(
        (obj) => obj.id === parseInt(request.params.id)
      );
      //si on ne trouve pas d'objet avec cet id
      if (!dataById) {
        response.status(404).json({
          message: "Pas d'objet avec cet id",
        });
      } else {
        //dans le tableau on va garder uniquement les objet dont l'id est différent de l'id de la requète
        existingData.entree = existingData.entree.filter(
          (obj) => obj.id != parseInt(request.params.id)
        );
        //on réécrit les données dans le fichier data.json
        fs.writeFile(cheminData,JSON.stringify(existing_data),
          (writeErr) => {
            //si il y a une erreur d'écriture
            if (writeErr) {
              //on envoit une réponse avec un status 500 et un message d'erreur
              response.status(500).json({
                message:
                  "Une erreur est survenue lors de l'écriture des données",
                error: err,
              });
            } else {
              //sinon on renvoit une réponse avec un status 200 et un message confirmant la mise à jour du fichier
              response.status(200).json({
                message: "mise à jour du fichier data.json",

              });
            }
          }
        );
      }
    }
  });
};
