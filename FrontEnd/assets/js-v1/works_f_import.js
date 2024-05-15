import {statutPromesse, jsonPromesse} from "./mon-module.js";


function affichageProjets (data) {
  const laGalerie = document.querySelector("div.gallery");
  for (const projet of data) {

if (projet.categoryId !== 0) {
    
    // Création de l'élément HTML figure
    const figureProjet = document.createElement("figure");
     // Création de l'élément HTML img
    const imageProjet = document.createElement("img");
     // Création de l'attibut src de l'élément HTML img et ajout de son contenu
    imageProjet.src = projet.imageUrl;
     // Création de l'attibut alt de l'élément HTML img et ajout de son contenu
    imageProjet.alt = projet.title;
    // Création de l'élément HTML figcaption
    const figcaptionProjet = document.createElement("figcaption");
    // Ajout du contenu entre les balises ouvrante et fermante figcaption
    figcaptionProjet.textContent = projet.title;
    figureProjet.append(
        imageProjet,
        figcaptionProjet
    );
    laGalerie.appendChild(figureProjet);
  }
  }
  return;
}

function lesProjets () {
  fetch('http://localhost:5678/api/works')
  .then(statutPromesse)
  .then(jsonPromesse)
  .then(affichageProjets)
  .catch(function(error) {
  console.log("Il y a un problème. Status Code:", error);
  });
  return;
}
lesProjets ();




