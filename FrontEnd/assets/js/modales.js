/* DEBUT - Fonction Vérification du status de la réponse API */
function statutPromesse (response) {
  if (response.status >= 200 && response.status < 300) {
  return Promise.resolve(response)
  } else {
  return Promise.reject(new Error(response.statusText))
  }
}
/* FIN - Fonction Vérification du status de la réponse API */

/* DEBUT - Transformation de la réponse API en objet JavaScript*/
function jsonPromesse (response) {
  return response.json()
}
/* FIN - Transformation de la réponse API en objet JavaScript*/

/* DEBUT - Recupération du lien de la Modification */
const classBoutonModifier = document.querySelector("main section div a.class-modifier");
const classBoutonEditer = document.querySelector("div a.class-editer");
/* FIN - Recupération du lien de la Modification */


/* DEBUT - Création de la fenêtre modale */
const idModale = document.getElementById("id-modale");
function affichModProjets (data) {
  // Création des Eléments HTML et insersion des données projets
  const sectionModContent = document.querySelector("div div section.section-class-mod-content");
  for (const projet of data) {
    if (projet.categoryId !== 0) {
      const figureModProjet = document.createElement("figure");
      const imageModProjet = document.createElement("img");
      imageModProjet.src = projet.imageUrl;
      imageModProjet.alt = projet.title;
      figureModProjet.append(
        imageModProjet,
      );
      sectionModContent.appendChild(figureModProjet);
    }
  }
}

const laModale = function lesModProjets () {
  fetch('http://localhost:5678/api/works')
  .then(statutPromesse)
  .then(jsonPromesse)
  .then(affichModProjets)
  .catch(function(error) {
  console.log("Il y a un problème. Status Code:", error);
  });
};

// lesModProjets ()

// When the user clicks the button, open the modal 
classBoutonModifier.onclick = function () {
  idModale.style.display = "flex";
  laModale();
}
classBoutonEditer.onclick = function () {
  idModale.style.display = "flex";
  laModale();
}
/* FIN - Création de la fenêtre modale */

// Get the div element that closes the modal
const divModClose = document.getElementsByClassName("class-mod-close")[0];

// When the user clicks on <span> (x), close the modal
divModClose.onclick = function() {
  idModale.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == idModale) {
    idModale.style.display = "none";
  }
}





















































