import { statutPromesse, jsonPromesse, affichageErreurs} from  "./manage.js";
import { createElementsCategories, createElementsWorks} from  "./categories.js";
import { createElementsEdition, createElementsModification} from  "./edition.js";
import { createElementsModale, closeAndRemoveElements} from  "./modale.js";

const loginElement = document.getElementById('login');

/* DEBUT - Vérifier si un jeton de session est stocké et le recupéré */
const token = localStorage.getItem('token');
/* FIN - Vérifier si un jeton de session est stocké et le recupéré */






/* DEBUT - Recupération des boutons de Connexion et de Déconnexion */
const boutonDeConnexion = document.getElementById('connexion');
if (token) {
  boutonDeConnexion.setAttribute('href', '#');
  boutonDeConnexion.textContent = "Logout";
  createElementsEdition();
  createElementsModification();
  lesProjets ();

} else {
  touteslesCategories ();
  lesProjets ();
}
// const boutonSeConnecter = document.querySelector("#id-connexion");
/* FIN - Recupération des boutons de Connexion et de Déconnexion */


/* DEBUT - Action sur bouton de déconnexion */
boutonDeConnexion.addEventListener('click', function() {
  // Déconnectez-vous en détruisant le jeton de session
  localStorage.removeItem('token');

  // Redirigez vers la page de connexion ou autre
  window.location.href = 'index.html';
});
/* FIN - Action sur bouton de déconnexion */


function touteslesCategories () {
  fetch('http://localhost:5678/api/categories', {
      method: "GET"
  })
.then(statutPromesse)
.then(jsonPromesse)
.then(createElementsCategories)
.catch(affichageErreurs);
}

function lesProjets () {
  fetch('http://localhost:5678/api/works', {
      method: "GET"
  })
.then(statutPromesse)
.then(jsonPromesse)
.then(createElementsWorks)
.catch(affichageErreurs);
}

// lesProjets ();




/* DEBUT - Recupération du lien de la Modification */
const classBoutonModifier = document.querySelector("main section div a.class-modifier");
const classBoutonEditer = document.querySelector("div a.class-editer");

const idModale = document.getElementById("id-modale");

/* FIN - Recupération du lien de la Modification */

function lesModProjets () {
  if (token) {
  fetch('http://localhost:5678/api/works')
  .then(statutPromesse)
  .then(jsonPromesse)
  .then(createElementsModale)
  .catch(affichageErreurs);
  }
};


if (token) {
// Création et Afficahage de la Modale en cliquant sur le bouton Modifier
classBoutonModifier.addEventListener('click', lesModProjets);

// Création et Afficahage de la Modale en cliquant sur le bouton Editer
classBoutonEditer.addEventListener('click', lesModProjets);
/* FIN - Création de la fenêtre modale */


// Recupération du bouton X
const divModClose = document.querySelector("div div div.class-mod-close");
// Fermeture et Suppression de la Modale en cliquant sur le bouton X
divModClose.addEventListener('click', closeAndRemoveElements);

// Fermeture et Suppression de la Modale en cliquant ailleur en dehor de la Modale
window.addEventListener('click', function(event) {
  if (event.target == idModale) {
    closeAndRemoveElements();
  }
});
}





/* const  idCategories = document.querySelector("main section div.categorie");
idCategories.addEventListener('click', function(event) {
  const idCategory = event.target.getAttribute('id');
  if (work.categoryId == idCategory) {
    lesProjets ();
  }
}); */








