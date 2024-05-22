import {statutPromesse, jsonPromesse} from "./mon-module.js";
import {lesCategories, donneesCategories} from "./categories.js";
import {affichageProjets} from "./projets.js";


// import token from "./login.js";

/* function boutonsConnexion() {
  if (token != null) {
    const idConnexion = document.getElementById('connexion');
    idConnexion.setAttribute('class', 'se-deconnecter');
    const buttonSeDeconnecter = document.createTextNode("Se Deconnecter");
    idConnexion.appendChild(buttonSeDeconnecter);
  } else {
    const idConnexion = document.getElementById('connexion');
    idConnexion.setAttribute('class', 'se-connecter');
    const buttonConnecter = document.createTextNode("Se connecter");
    idConnexion.appendChild(buttonConnecter);
  }
}
boutonsConnexion() */
// boutonsConnexion()


function lesProjets () {
  fetch('http://localhost:5678/api/works')
  .then(statutPromesse)
  .then(jsonPromesse)
  .then(affichageProjets)
  .catch(function(error) {
  console.log("Il y a un problème. Status Code:", error);
  });
}
lesProjets ();



lesCategories;
function touteslesCategories () {
    fetch('http://localhost:5678/api/categories')
    .then(statutPromesse)
    .then(jsonPromesse)
    .then(donneesCategories)
    .catch(function(error) {
    console.log("Il y a un problème. Status Code:", error);
    });
  }
touteslesCategories ();



