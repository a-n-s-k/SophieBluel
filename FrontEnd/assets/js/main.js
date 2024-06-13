import { statutPromesse, jsonPromesse, affichageErreurs, setLocalStorage, removeFromLocalStorage} from  "./manage.js";
import { createElementsCategories} from  "./categories.js";
import { createElementsWorks} from  "./works.js";
import { createElementsEdition, createElementsModification} from  "./edition.js";

import { createElementsModale} from  "./modale.js";

const loginElement = document.getElementById('login');


/* DEBUT - Vérifier si un jeton de session est stocké et le recupéré */
const getSessionToken = sessionStorage.getItem('tokenKey');
/* FIN - Vérifier si un jeton de session est stocké et le recupéré */


/* DEBUT - Recupération des boutons de Connexion et de Déconnexion */
const boutonDeConnexion = document.getElementById('connexion');
if (getSessionToken) {
  boutonDeConnexion.setAttribute('href', '#');
  boutonDeConnexion.textContent = "Logout";
  createElementsEdition();
  createElementsModification();
} else {
  touteslesCategories ();
}
/* FIN - Recupération des boutons de Connexion et de Déconnexion */

/* DEBUT - Action sur bouton de déconnexion */
boutonDeConnexion.addEventListener('click', function() {
  // Déconnectez-vous en détruisant le jeton de session
  sessionStorage.removeItem('tokenKey');
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

lesProjets();


/* DEBUT - Recupération du lien de la Modification */
const classBoutonModifier = document.querySelector("main section div a.class-modifier");
const classBoutonEditer = document.querySelector("div a.class-editer");

const idModale = document.getElementById("id-modale");

/* FIN - Recupération du lien de la Modification */

function lesModProjets () {
  fetch('http://localhost:5678/api/works')
  .then(statutPromesse)
  .then(jsonPromesse)
  .then(createElementsModale)
  .catch(affichageErreurs);
};


// When the user clicks the button, open the modal 
classBoutonModifier.onclick = function () {
  idModale.setAttribute('class', 'modale-visible');
  lesModProjets();
}
classBoutonEditer.onclick = function () {
  idModale.setAttribute('class', 'modale-visible');
  lesModProjets();
}
/* FIN - Création de la fenêtre modale */

// Get the div element that closes the modal

function closeAndRemoveElements() {
  const toRemovedElements = document.getElementById("modale-gallery-content");
  toRemovedElements.remove();
}

const divModClose = document.querySelector("div div div.class-mod-close");

// When the user clicks on <span> (x), close the modal
divModClose.onclick = function() {
  closeAndRemoveElements();
  idModale.setAttribute('class', 'modale-invisible');
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == idModale) {
    closeAndRemoveElements();
    idModale.setAttribute('class', 'modale-invisible');
  }
}


// Clean LocalStorage Function
function cleanLocalStorage() {
  for(const key in localStorage) {
      delete localStorage[key];
  }
}
// cleanLocalStorage();

