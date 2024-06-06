import { statutPromesse, jsonPromesse, affichageErreurs} from  "./manage.js";
import { functionCategoryElements, createElementsWorks} from  "./categories.js";
import { createElementsEdition, createElementsModification} from  "./edition.js";
import { createElementsModale, closeAndRemoveElements} from  "./modale.js";
import { filterCategory} from  "./filter.js";

const loginElement = document.getElementById('login');

/* DEBUT - Vérifier si un jeton est stocké et le recupéré */
const token = localStorage.getItem('token');
/* FIN - Vérifier si un jeton est stocké et le recupéré */

/* DEBUT - Déconnexion */
const boutonDeConnexion = document.getElementById('connexion');
function deConnexion () {
  boutonDeConnexion.setAttribute('href', '#');
  boutonDeConnexion.textContent = "Logout";
  /* DEBUT - Action sur bouton de déconnexion */
  boutonDeConnexion.addEventListener('click', function() {
    // Déconnexion en détruisant le locale storage
    localStorage.removeItem('token');
    // Redirection vers la page d'accueil
    window.location.href = 'index.html';
  })
  /* FIN - Action sur bouton de déconnexion */
}
/* FIN - Déconnexion */


/* DEBUT - Recupération des boutons de Connexion et de Déconnexion */
if (token) {
  deConnexion ();
  createElementsEdition();
  createElementsModification();
  lesProjets ();

} else {
touteslesCategories ();
lesProjets ();
}
/* FIN - Recupération des boutons de Connexion et de Déconnexion */


function touteslesCategories () {
  fetch('http://localhost:5678/api/categories', {
    method: "GET"
})
.then(statutPromesse)
.then(jsonPromesse)
.then(functionCategoryElements)
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





// DEBUT - Recupération du lien de la Modification 
const classBoutonModifier = document.querySelector("main section div a.class-modifier");
const classBoutonEditer = document.querySelector("div a.class-editer");

const idModale = document.getElementById("id-modale");

// FIN - Recupération du lien de la Modification 

function lesModProjets () {
  fetch('http://localhost:5678/api/works')
  .then(statutPromesse)
  .then(jsonPromesse)
  .then(createElementsModale)
  .catch(affichageErreurs);
};


if (token) {
// Création et Afficahage de la Modale en cliquant sur le bouton Modifier
classBoutonModifier.addEventListener('click', lesModProjets);

// Création et Afficahage de la Modale en cliquant sur le bouton Editer
classBoutonEditer.addEventListener('click', lesModProjets);
// FIN - Création de la fenêtre modale


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












